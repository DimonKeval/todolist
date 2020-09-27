import React from "react";
import {Button} from "./Button";
import {InputComponent} from "./InputComponent";

export function ListComponent(props) {
    const [arrayList, setList] = React.useState([
        {task: <strike>'Prepare breakfast'</strike>},
        {task: 'Take kids to school'},
        {task: 'Go to the office'},
        {task: 'Go to the grocery store'},
        {task: 'Take kids from school'},
        {task: 'Prepare dinner'},
        {task: 'Go to sleep'},
    ]);


    function taskButton() {
        console.log('test')
    }

    function addTask(task) {
        setList([...arrayList, {task}]);
        console.log(arrayList);
    }

    function deleteTask(taskNumber) {
        const index = arrayList.indexOf(taskNumber - 1);
        arrayList.splice(index, 1);
    }

    function renderTask(el, index) {
        return <div key={index}>
            <p>{index + 1}. {el.task} <Button onClick={()=>taskButton(el.task)} task={el}>Done</Button></p>
        </div>;
    }


    return <div>
        <InputComponent adding={addTask}/>
        {arrayList.map((el, index) =>
            renderTask(el, index))}
    </div>
}

