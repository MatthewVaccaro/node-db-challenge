exports.seed = async function(knex) {
  await knex("resources").insert([
    { name: "Macbook", description: "To Code with" },
    { name: "Wifi" },
    { name: "Speakers", description: "For Music" }
  ]);
};
