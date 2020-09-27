import React from "react";

let arrayList = [
    {task: <strike>'Prepare breakfast'</strike>, button: <button onClick={taskButton}>Done</button>},
    {task: 'Take kids to school', button: <button onClick={taskButton}>Done</button>},
    {task: 'Go to the office', button: <button onClick={taskButton}>Done</button>},
    {task: 'Go to the grocery store', button: <button onClick={taskButton}>Done</button>},
    {task: 'Take kids from school', button: <button onClick={taskButton}>Done</button>},
    {task: 'Prepare dinner', button: <button onClick={taskButton}>Done</button>},
    {task: 'Go to sleep', button: <button onClick={taskButton}>Done</button>},
];


export function taskButton(){

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
    <p>{index+1}. {el.task}  {el.button}</p>
    </div>;
}


export function ListComponent(props){
    return <div>
        {addTask('Task')}
    {arrayList.map((el, index)=>
    renderTask(el, index))}

</div>
}

