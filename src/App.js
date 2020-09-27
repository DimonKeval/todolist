import React from 'react';
import './App.css';
import {TaskButton} from './components/TaskButton.jsx'
import {InputComponent} from "./components/InputComponent";
import {ListComponent} from "./components/ListComponent";
import {Button} from "./components/Button";

export function App() {
  return (<>
      <p>Hello! I'm ToDoList!</p>

      <InputComponent/>
      <ListComponent/>
      <Button
      task = 'Task: '
      onClick={()=>{}}
      />
      </>
  );
}

export default App;
