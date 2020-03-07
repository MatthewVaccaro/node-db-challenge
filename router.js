const express = require("express");
const db = require("./dbModle");
const router = express.Router();

//Endpoitns

router.get("/resources", async (req, res, next) => {
  try {
    const resources = await db.getResources();
    res.status(200).json(resources);
  } catch (error) {
    next(error);
  }
});

router.get("/projects", async (req, res, next) => {
  try {
    const projects = await db.getProjects();
    res.status(200).json(projects);
  } catch (error) {
    next(error);
  }
});

router.get("/tasks", async (req, res, next) => {
  try {
    const tasks = await db.getTasks();
    res.status(200).json(tasks);
  } catch (error) {
    next(error);
  }
});

router.post("/resources", async (req, res, next) => {
  try {
    const body = {
      name: req.body.name,
      description: req.body.description
    };
    const addResource = await db.addResource(body);
    res.status(201).json(addResource);
  } catch (error) {
    next(error);
  }
});
router.post("/projects", async (req, res, next) => {
  try {
    const body = {
      name: req.body.name,
      description: req.body.description
    };
    const addProject = await db.addProject(body);
    res.status(201).json(addProject);
  } catch (error) {
    next(error);
  }
});
router.post("/tasks", async (req, res, next) => {
  try {
    const body = {
      description: req.body.description,
      notes: req.body.notes,
      project_id: req.body.project_id
    };
    const addTask = await db.addTask(body);
    res.status(201).json(addTask);
  } catch (error) {
    next(error);
  }
});

//MacDaddy Call

router.get("/getFullProject/:id", async (req, res, next) => {
  try {
    const project = await db.getFullProject(req.params.id);
    res.status(200).json(project);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
