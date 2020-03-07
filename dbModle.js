const db = require("./data/config");

//functions
function addResource(body) {
  return db.insert(body).into("resources");
}

function getResources() {
  return db("*").from("resources");
}

function addProject(body) {
  return db.insert(body).into("projects");
}

function getProjects() {
  return db("*").from("projects");
}

function addTask(body) {
  return db.insert(body).into("tasks");
}

function getTasks() {
  return db("*").from("tasks");
}

function getFullProject(id) {
  return db
    .select(
      "projects.name",
      "projects.description",
      "projects.status",
      "tasks.description",
      "tasks.notes",
      "tasks.status",
      "resources.name"
    )
    .from("projects")
    .join("tasks", "tasks.project_id", id)
    .join("project_resources", "project_resources.project_id", id)
    .join("resources", "resources.id", id)
    .where("projects.id", id);
}

module.exports = {
  addResource,
  getResources,
  addProject,
  getProjects,
  addTask,
  getTasks,
  getFullProject
};

// SELECT projects.name "Project",
//  projects.description "Description",
//  projects.status "Status",
//  tasks.description "task",
//  tasks.notes "notes" ,
//  tasks.status "Task Status",
//  resources.name "Resource"
//  FROM projects
// JOIN tasks ON tasks.project_id = projects.id
// JOIN project_resources ON projects.id =  project_resources.project_id
// JOIN resources ON resources.id = project_resources.resource_id
