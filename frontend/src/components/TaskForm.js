// components/TaskForm.jsx
import React, { useState, useEffect } from "react";

const TaskForm = ({ onSubmit, editingTask }) => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    dueDate: "",
    category: "",
  });

  useEffect(() => {
    if (editingTask) {
      setTask(editingTask);
    }
  }, [editingTask]);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(task);
    setTask({ title: "", description: "", dueDate: "", category: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md space-y-4">
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={task.title}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        required
      />
      <textarea
        name="description"
        placeholder="Description"
        value={task.description}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />
      <input
        type="date"
        name="dueDate"
        value={task.dueDate}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />
      <input
        type="text"
        name="category"
        placeholder="Category"
        value={task.category}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
        {editingTask ? "Update Task" : "Add Task"}
      </button>
    </form>
  );
};

export default TaskForm;
