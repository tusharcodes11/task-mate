const Task = require("../models/Task");

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    console.error("🔥 ERROR in getTasks:", error.message); // <--- this is what we need to see
    res.status(500).json({ error: "Server error while fetching tasks" });
  }
};


  

exports.createTask = async (req, res) => {
    try {
      console.log("📥 Task received to create:", req.body); // log the data
      const task = new Task(req.body);
      await task.save();
      res.status(201).json(task);
    } catch (error) {
      console.error("❌ Error in createTask:", error.message);
      res.status(500).json({ error: "Failed to create task" });
    }
  };
  

exports.updateTask = async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(task);
};

exports.deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Task deleted" });
};
