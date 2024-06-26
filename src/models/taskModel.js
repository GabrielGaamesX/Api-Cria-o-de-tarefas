const connection = require("./connection");

const getAll = async () => {
  const [tasks] = await connection.execute("SELECT * FROM tasks");
  return tasks;
};

const createTask = async (task) => {
  const { title } = task;

  const dateUTC = new Date(Date.now()).toUTCString();
  const query = "INSERT INTO tasks(title, status, created_at) VALUES(?,?,?)";

  const [createdTask] = await connection.execute(query, [
    title,
    "pendente",
    dateUTC,
  ]);
  return { insertId: createdTask.insertId };
};

const deleteTasks = (async = (id) => {
  const removedTasks = connection.execute("DELETE FROM tasks WHERE ID = ?", [
    id,
  ]);
  return removedTasks;
});

const updateTask = (async = (id, task) => {
  const { title, status } = task;
  const query = "UPDATE tasks SET title =? , status = ? where id =?";
  const updatedTask = connection.execute(query, [title, status, id]);
  return updatedTask;
});
module.exports = {
  getAll,
  createTask,
  deleteTasks,
  updateTask,
};
