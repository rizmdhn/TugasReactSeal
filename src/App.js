import './App.css';
import Button from './components/Button';
import React, { useState } from 'react';

function App() {
  const [tasklist, setTasklist] = useState({ data: [] });
  const [newtaskvalue, setnewtaskvalue] = useState("");
  const actionAddTask = () => {
    if (newtaskvalue.trim() === "") {
      alert("Please enter a task");
      return false;
    }
    const newData = tasklist.data;
    newData.push(newtaskvalue);
    setTasklist({ rand: Math.random(), data: newData });
    setnewtaskvalue = null;
  }
  return (
    <div>
      <input type="text" id='newtaskinput' onChange={(e) => setnewtaskvalue(e.target.value)} value={newtaskvalue} placeholder="input task here" />
      <Button text="Add Task" onClick={actionAddTask} />  
       <ul>
        {tasklist.data.map((item) => (
          <li>{item}</li>
        ))}</ul>
    </div>

  );
}

export default App;
