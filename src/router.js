const express = require("express");
const router = express.Router();

const tasksController = require("./controllers/tasksControllers");
const tasksMiddlewares = require("./middlewares/tasksMiddlewares");

router.get("/tasks", tasksController.getAll);
router.post(
  "/tasks",
  tasksMiddlewares.validateTitle,
  tasksController.createTask
);
router.delete("/tasks/:id", tasksController.deleteTasks);

router.put(
  "/tasks/:id",
  tasksMiddlewares.validateStatus,
  tasksMiddlewares.validateTitle,
  tasksController.updateTask
);

module.exports = router;
