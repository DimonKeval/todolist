import React from "react";
import {App} from "C:/Users/kradkv/IdeaProjects/todolist/src/App.js"
export function TaskButton(props) {
    return <button id={props.id}>{props.text}</button>


    function getTask() {
        //Odnajdujemy pole do którego będzie wpisana treść zadania
        const task = App.getElementById('newTask');

        // Odnajdujemy element do którego przekażemy treść zadania do wyświetlenia
        const putInList = App.getElementById("header");

        putInList.innerText = task.value;
    }

    const getButton = App.getElementById(props.id);
    getButton.addEventListener('click', getTask);
}