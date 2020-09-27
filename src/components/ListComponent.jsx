import React from "react";

const arrayList = [
    {task: 'Prepare breakfast'},
    {task: 'Take kids to school'},
    {task: 'Go to the office'},
    {task: 'Go to the grocery store'},
    {task: 'Take kids from school'},
    {task: 'Prepare dinner'},
    {task: 'Go to sleep'},
];

function renderTask(el, index){
    return <div key={index}>
    <p>{el.task}</p>
    </div>;
}


export function ListComponent(props){
    return <div>
    {arrayList.map((el, index)=>
    renderTask(index, el))}
</div>
}

