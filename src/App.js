import React from 'react';
import TaskList from './components/TaskList.js';

const App = () => {
  return (
    <div className="app">
      <h1>Task Manager</h1>
      <TaskList />
    </div>
  );
};

export default App;
