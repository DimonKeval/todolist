import React from "react";

export function TaskButton(props) {
    return <button onClick={props.onClick} id={props.id}>{props.text}</button>
}