import React from "react";

export function Button(props){

    return <button onClick={()=>props.onClick(props.task)}>Done</button>
}