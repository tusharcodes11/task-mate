// components/TaskCard.jsx
import React from "react";
import { FaTrash, FaEdit, FaCheckCircle, FaUndo } from "react-icons/fa";

const TaskCard = ({ task, onDelete, onEdit, onToggleComplete }) => {
  return (
    <div className={`p-4 rounded shadow-md mb-4 border ${task.isCompleted ? 'bg-green-100' : 'bg-white'}`}>
      <div className="flex justify-between items-start">
        <div>
          <h2 className={`text-xl font-semibold ${task.isCompleted ? 'line-through text-gray-500' : ''}`}>
            {task.title}
          </h2>
          <p className="text-sm text-gray-600">{task.description}</p>
          <p className="text-sm mt-1"><span className="font-medium">Due:</span> {task.dueDate}</p>
          <p className="text-sm"><span className="font-medium">Category:</span> {task.category}</p>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => onToggleComplete(task._id)}
            className={`p-2 rounded text-white ${task.isCompleted ? 'bg-yellow-500' : 'bg-green-500'}`}
            title={task.isCompleted ? "Mark Incomplete" : "Mark Complete"}
          >
            {task.isCompleted ? <FaUndo /> : <FaCheckCircle />}
          </button>
          <button
            onClick={() => onEdit(task)}
            className="p-2 bg-blue-500 text-white rounded"
            title="Edit"
          >
            <FaEdit />
          </button>
          <button
            onClick={() => onDelete(task._id)}
            className="p-2 bg-red-500 text-white rounded"
            title="Delete"
          >
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
