exports.up = function(knex) {
    return knex.schema
      .createTable("projects", tbl => {
        tbl.increments();
        tbl
          .string("project_name")
          .notNullable()
          .index();
        tbl.string("description");
        tbl.string("completed").defaultTo("false");
      })
      .createTable("tasks", tbl => {
        tbl.increments();
        tbl
          .string("task_name")
          .notNullable()
          .index();
        tbl.string("description");
  
        tbl.string("notes");
  
        tbl.string("completed").defaultTo("false");
  
        tbl
          .string("project_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("projects")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE");
      })
      .createTable("resources", tbl => {
        tbl.increments();
        tbl
          .string("resource_name")
          .notNullable()
          .index();
        tbl.string("description");
      })
  
      .createTable("tasks_resources", tbl => {
        tbl.increments();
        tbl
          .string("resources_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("resources")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE");
  
        tbl
          .string("tasks_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("tasks")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE");
      });
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists("tasks_resources")
      .dropTableIfExists("resources")
      .dropTableIfExists("tasks")
      .dropTableIfExists("projects");
  };