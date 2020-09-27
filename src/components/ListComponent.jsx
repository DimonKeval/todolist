import React from "react";

let arrayList = [
    {task: 'Prepare breakfast'},
    {task: 'Take kids to school'},
    {task: 'Go to the office'},
    {task: 'Go to the grocery store'},
    {task: 'Take kids from school'},
    {task: 'Prepare dinner'},
    {task: 'Go to sleep'},
];

export function addTask(task){
    arrayList.push({task: task})
}

export function deleteTask(taskNumber){
    const index = arrayList.indexOf(taskNumber - 1);
    arrayList.splice(index, 1);
}

function renderTask(el, index){
    return <div key={index}>
    <p>{index+1}. {el.task}</p>
    </div>;
}


export function ListComponent(props){
    return <div>
    {arrayList.map((el, index)=>
    renderTask(el, index))}

</div>
}

