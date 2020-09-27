import React from "react";
import {TaskButton} from "./TaskButton";

export function InputComponent(props){



    const [text, setText] = React.useState("");
    return <>
    <input id='newTask' value={text} onChange={event => setText(event.currentTarget.value)}/>
           <TaskButton onClick={()=>props.adding(text)} text="Add new task in your life!"/>
    </>;


}



