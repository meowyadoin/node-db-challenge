const express = require("express");

const Projects = require("./projects-model");
const Tasks = require("./projects-model");

const router = express.Router();

router.get("/", (req, res) => {
  Projects.find()
    .then(projects => {
      res.json(projects);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get projects" });
    });
});

router.post("/", (req, res) => {
  const projectData = req.body;

  Projects.add(projectData)
    .then(project => {
      res.status(201).json(project);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to create new project" });
    });
});
router.get("/:id/tasks", (req, res) => {
  const { id } = req.params;

  Tasks.findTasksForProject(id)
    .then(steps => {
      if (steps.length) {
        res.json(steps);
      } else {
        res.status(404).json({
          message: "Could not find the tasks for given project"
        });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get tasks" });
    });
});

module.exports = router;
