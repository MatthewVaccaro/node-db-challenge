const cleaner = require("knex-cleaner");

exports.seed = async function(knex) {
  await knex("projects").insert([
    {
      name: "Build Database",
      description: "Using Node and SQLite build a database please"
    }
  ]);
};
