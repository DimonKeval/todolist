import React from 'react';
import './App.css';
import {TaskButton} from './components/TaskButton.jsx'
import {InputComponent} from "./components/InputComponent";
import {ListComponent} from "./components/ListComponent";

export function App() {
  return (<>
      <p>Hello! I'm ToDoList!</p>

      <InputComponent/>
      <ListComponent/>
      </>
  );
}

export default App;
