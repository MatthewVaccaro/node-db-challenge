exports.seed = async function(knex) {
  await knex("tasks").insert([
    { description: "Get Express Set Up", project_id: 1 },
    {
      description: "Create table Migration",
      notes: "Draw out your tables first!",
      project_id: 1
    },
    { description: "Write DB Functions and End points", project_id: 1 }
  ]);
};
