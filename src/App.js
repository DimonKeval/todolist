import React from 'react';
import './App.css';
import {CustomButton} from './components/CustomButton.jsx'

function App() {
  return (<>
      <p>Hello! I'm ToDoList!</p>
      <CustomButton text='Add a new task to your life!'/>
      </>
  );
}

export default App;
