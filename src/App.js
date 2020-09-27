import React from 'react';
import './App.css';
import {TaskButton} from './components/TaskButton.jsx'
import {ListComponent} from "./components/ListComponent";

export function App() {
  return <>
      <p>Hello! I'm ToDoList!</p>
      <TaskButton text='Add a new task to your life!'/>

      <ListComponent />

      </>;
}

export default App;
