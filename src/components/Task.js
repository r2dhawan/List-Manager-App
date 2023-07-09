import React from 'react';

const Task = ({ task, onTaskComplete, onTaskDelete }) => {
  return (
    <div className="task">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <button onClick={() => onTaskComplete(task.id)}>Complete</button>
      <button onClick={() => onTaskDelete(task.id)}>Delete</button>
    </div>
  );
};

export default Task;
