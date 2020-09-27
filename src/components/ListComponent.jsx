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
    console.log(arrayList);
    arrayList.push({task: task});
    ListComponent();
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

    {arrayList.map((el, index)=>
    renderTask(el, index))}

</div>
}

