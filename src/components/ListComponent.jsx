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
    console.log(arrayList);
    arrayList.push({task: task});
    console.log(arrayList);
}

export function deleteTask(task){
    arrayList.filter();
}

function renderTask(el, index){
    return <div key={index}>
    <p>{index+1}. {el.task}</p>
    </div>;
}


export function ListComponent(props){
    return <div>
        {addTask('New task')}
    {arrayList.map((el, index)=>
    renderTask(el, index))}

</div>
}

