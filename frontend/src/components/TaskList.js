// components/TaskList.jsx
import React from "react";
import TaskCard from "./TaskCard";

const TaskList = ({ tasks, onDelete, onEdit, onToggleComplete }) => {
  if (tasks.length === 0) {
    return <p className="text-center text-gray-500 mt-4">No tasks found.</p>;
  }

  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <TaskCard
          key={task._id}
          task={task}
          onDelete={onDelete}
          onEdit={onEdit}
          onToggleComplete={onToggleComplete}
        />
      ))}
    </div>
  );
};

export default TaskList;
