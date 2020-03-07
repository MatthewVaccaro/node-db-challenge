exports.up = function(knex) {
  return knex.schema
    .createTable("projects", table => {
      table.increments("id");
      table.text("name").notNullable();
      table.text("description");
      table.boolean("status").defaultTo(false);
    })
    .createTable("resources", table => {
      table.increments("id");
      table.text("name").notNullable();
      table.text("description");
    })
    .createTable("tasks", table => {
      table.increments("id");
      table.text("description").notNullable();
      table.text("notes");
      table.boolean("status").defaultTo(false);
      table
        .integer("project_id")
        .notNullable()
        .references("id")
        .inTable("projects");
    })
    .createTable("project_resources", table => {
      table.increments("id");
      table
        .integer("project_id")
        .notNullable()
        .references("id")
        .inTable("projects");
      table
        .integer("resource_id")
        .notNullable()
        .references("id")
        .inTable("resources");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("project_resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects");
};
