const express = require("express");

const ProjectsRouter = require("../projects/projectsRouter");
const ResourcesRouter = require("../resources/resourcesRouter");
const TasksRouter = require("../tasks/tasksRouter");
const server = express();

server.use(express.json());
server.use("/api/projects", ProjectsRouter);
server.use("/api/resources", ResourcesRouter);
server.use("/api/tasks", TasksRouter);

module.exports = server;
