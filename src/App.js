import React from 'react';
import './App.css';
import {InputComponent} from "./components/InputComponent";
import {ListComponent} from "./components/ListComponent";

export function App() {
  return (<>
      <p>Hello! I'm ToDoList!</p>


      <ListComponent/>
      {/*<Button*/}
      {/*task = 'Task: '*/}
      {/*onClick={()=>{}}*/}
      {/*/>*/}
      </>
  );
}

export default App;
