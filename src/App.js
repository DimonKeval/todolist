import React from 'react';
import './App.css';
import {TaskButton} from './components/TaskButton.jsx'
import {InputComponent} from "./components/InputComponent";

export function App() {
  return (<>
      <p>Hello! I'm ToDoList!</p>
      <TaskButton text='Add a new task to your life!' id='taskButton'/>
      <InputComponent/>
      </>
  );
}

export default App;
