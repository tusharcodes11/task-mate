import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import FilterBar from "./components/FilterBar";

import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from "./services/taskService";


function App() {
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await getTasks();
        setTasks(res.data);
      } catch (err) {
        console.error("Error fetching tasks:", err);
      }
    };
  
    fetchTasks();
  }, []);
  

  const handleAddOrUpdateTask = async (newTask) => {
    try {
      if (editingTask) {
        const res = await updateTask(editingTask._id, newTask);
        setTasks(tasks.map(t => (t._id === editingTask._id ? res.data : t)));
        setEditingTask(null);
      } else {
        const res = await createTask(newTask);
        setTasks([...tasks, res.data]);
      }
    } catch (err) {
      console.error("Error saving task:", err);
    }
  };
  

  const handleDelete = async (id) => {
    try {
      await deleteTask(id);
      setTasks(tasks.filter(t => t._id !== id));
    } catch (err) {
      console.error("Error deleting task:", err);
    }
  };
  

  //  Edit a task
  const handleEdit = (task) => {
    setEditingTask(task);
  };

  //  Toggle complete/incomplete
  const handleToggleComplete = async (id) => {
    const taskToToggle = tasks.find(t => t._id === id);
    try {
      const res = await updateTask(id, {
        ...taskToToggle,
        isCompleted: !taskToToggle.isCompleted,
      });
      setTasks(tasks.map(t => (t._id === id ? res.data : t)));
    } catch (err) {
      console.error("Error toggling task:", err);
    }
  };
  

  //  Get unique categories
  const categories = [...new Set(tasks.map((t) => t.category))];

  //  Apply filters
  const filteredTasks = tasks.filter(
    (task) =>
      (task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        task.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedCategory === "" || task.category === selectedCategory)
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="p-4 md:p-8 max-w-3xl mx-auto">
        <TaskForm onSubmit={handleAddOrUpdateTask} editingTask={editingTask} />
        <FilterBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          categories={categories}
        />
        <TaskList
          tasks={filteredTasks}
          onDelete={handleDelete}
          onEdit={handleEdit}
          onToggleComplete={handleToggleComplete}
        />
      </div>
    </div>
  );
}

export default App;


