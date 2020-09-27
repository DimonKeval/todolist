import React from "react";
import {TaskButton} from "./TaskButton";
import {addTask} from "./ListComponent";

export function InputComponent(props){

    function sendTask(){
        console.log("input send" + text);
        addTask(text);
    }

    const [text, setText] = React.useState("");
    return <>
    <input id='newTask' value={text} onChange={event => setText(event.currentTarget.value)}/>
           <TaskButton onClick={sendTask} text="Add new task in your life!"/>
    </>;


}



