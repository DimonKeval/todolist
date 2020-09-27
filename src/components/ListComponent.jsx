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

function renderTask(el, index){
    return <div key={index}>
    <p>{index+1}. {el.task}</p>
    </div>;
}


export function ListComponent(props){
  console.log('alert') ;
    return <div>
    {arrayList.map((el, index)=>
    renderTask(el, index))}
</div>
}

