import React from "react";
import {Button} from "./Button";

let arrayList = [
    {task: <strike>'Prepare breakfast'</strike>},
    {task: 'Take kids to school'},
    {task: 'Go to the office'},
    {task: 'Go to the grocery store'},
    {task: 'Take kids from school'},
    {task: 'Prepare dinner'},
    {task: 'Go to sleep'},
];


export function taskButton(){
console.log('test')
}

export function addTask(task){
    arrayList.push({task: task, button: <button onClick={taskButton}>Done</button>})
}

export function deleteTask(taskNumber){
    const index = arrayList.indexOf(taskNumber - 1);
    arrayList.splice(index, 1);
}

function renderTask(el, index){
    return <div key={index}>
    <p>{index+1}. {el.task}  <Button onClick={taskButton} task={el}>Done</Button></p>
    </div>;
}


export function ListComponent(props){
    return <div>
        {addTask('Task')}
    {arrayList.map((el, index)=>
    renderTask(el, index))}

</div>
}

