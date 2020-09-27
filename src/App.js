import React from 'react';
import './App.css';
import {CustomButton} from './components/CustomButton.jsx'
import {ListComponent} from "./components/ListComponent";

function App() {
  return <>
      <p>Hello! I'm ToDoList!</p>
      <CustomButton text='Add a new task to your life!'/>

      <ListComponent />

      </>;
}

export default App;
