import React from 'react';
import './App.css';
import {TaskButton} from './components/TaskButton.jsx'
import {InputComponent} from "./components/InputComponent";
import {ListComponent} from "./components/ListComponent";

export function App() {
  return (<>
      <p>Hello! I'm ToDoList!</p>
      <TaskButton text='Add a new task to your life!' id='taskButton'/>
      <InputComponent/>
      <ListComponent/>
      </>
  );
}

export default App;
