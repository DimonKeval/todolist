import React from "react";
import {Button} from "./Button";
import {InputComponent} from "./InputComponent";

export function ListComponent(props) {
    const [arrayList, setList] = React.useState([
        {task: 'Prepare breakfast', state: false},
        {task: 'Take kids to school', state: false},
        {task: 'Go to the office', state: false},
        {task: 'Go to the grocery store', state: false},
        {task: 'Take kids from school', state: false},
        {task: 'Prepare dinner', state: false},
        {task: 'Go to sleep', state: false},
    ]);


    function taskButton(el) {
        el.state = true;
        console.log(el.state)
    }

    function addTask(task) {
        setList([...arrayList, {task: task, state:false}]);
        console.log(arrayList);
    }

    function deleteTask(taskNumber) {
        const index = arrayList.indexOf(taskNumber - 1);
        arrayList.splice(index, 1);
    }

    function renderTask(el, index) {
        return <div key={index}>
            <p>{index + 1}. {el.task} <Button onClick={()=>taskButton(el)} task={el}>Done</Button></p>
        </div>;
    }


    return <div>
        <InputComponent adding={addTask}/>
        {arrayList.map((el, index) =>
            renderTask(el, index))}
    </div>
}

