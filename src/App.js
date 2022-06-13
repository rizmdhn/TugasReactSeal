import './App.css';
import Button from './components/Button';
import TextInput from './components/Input';
import React, { useState } from 'react';
import List from './components/ListItem';

function App() {
  const [tasklist, setTasklist] = useState({ data: [] });
  const [newtaskvalue, setnewtaskvalue] = useState("");
  const [updatetaskvalue, setupdatetask] = useState("");
  const [ userInput, setUserInput ] = useState('');

  const onClearArray = () => {
    setTasklist({ data: [] });
  };

  const actionAddTask = () => {
    if (newtaskvalue.trim() === "") {
      alert("Please enter a task");
      return false;
    }
    const newData = tasklist.data;
    newData.push(newtaskvalue, key);
    setTasklist({ data : newData });
    setnewtaskvalue = null;
  }
  const actionUpdateTask = i => {
    if (newtaskvalue.trim() === "") {
      alert("Please enter a task");
      return false;
    }
    setTasklist(tasklist => {
      const data = tasklist.data.map((item, j) => {
        if (j === i) {
          return item = updatetaskvalue;
        } else {
          return item;
        }
      });

      return {
        data,
      };
    });
  }

  return (
    <div>
      <h1 className='mx-auto'>To Do List </h1>
      <TextInput value={newtaskvalue} onChange={(e) => setnewtaskvalue(e.target.value)} type="text" id='newtaskinput' placeholder="input task here" />
      <Button text="Add Task" onClick={actionAddTask} />  
      <List ListItem={tasklist}/>
      <Button type="button" backgroundColor='red'  text='Clear Data' onClick={onClearArray}/>

    </div>

  );
}

export default App;
