exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("tasks_resources")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("tasks_resources").insert([
        { resources_id: 1, tasks_id: 1 },
        { resources_id: 2, tasks_id: 1 },
        { resources_id: 3, tasks_id: 1 },
        { resources_id: 4, tasks_id: 2 },
        { resources_id: 5, tasks_id: 2 },
        { resources_id: 6, tasks_id: 3 },
        { resources_id: 7, tasks_id: 3 }
      ]);
    });
};