import React, { useState } from 'react';
import Task from '../components/Task';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [showCompleted, setShowCompleted] = useState(false);

  const handleTaskComplete = (taskId) => {
    setTasks(tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, completed: true };
      }
      return task;
    }));
  };

  const handleTaskDelete = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const handleToggleCompleted = () => {
    setShowCompleted(!showCompleted);
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: new Date().getTime(),
        title: newTask,
        description: '',
        completed: false
      };
      setTasks([...tasks, task]);
      setNewTask('');
    }
  };

  const completedTasks = tasks.filter(task => task.completed);

  return (
    <div className="task-list">
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button type="submit">Add</button>
      </form>
      <button onClick={handleToggleCompleted}>
        {showCompleted ? 'Hide Completed' : 'Show Completed'}
      </button>
      {showCompleted && completedTasks.length > 0 ? (
        <div>
          <h2>Completed Tasks:</h2>
          {completedTasks.map(task => (
            <Task
              key={task.id}
              task={task}
              onTaskComplete={handleTaskComplete}
              onTaskDelete={handleTaskDelete}
            />
          ))}
        </div>
      ) : null}
      {tasks.map(task => {
        if (!task.completed && (!showCompleted || (showCompleted && completedTasks.length === 0))) {
          return (
            <Task
              key={task.id}
              task={task}
              onTaskComplete={handleTaskComplete}
              onTaskDelete={handleTaskDelete}
            />
          );
        }
        return null;
      })}
    </div>
  );
};

export default TaskList;
