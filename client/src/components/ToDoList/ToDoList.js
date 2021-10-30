import React from "react";
import { useToDoState } from "../../reducers/ToDoContext";
import ToDoItem from "../ToDoItem/ToDoItem";
import "./ToDoListStyle.css";

function ToDoList() {
  const tasks = useToDoState();

  return (
    <div class="ToDoListBlock">
      {tasks.map((task) => (
        <ToDoItem
          key={task.id}
          id={task.id}
          text={task.text}
          status={task.done}
        />
      ))}
    </div>
  );
}

export default ToDoList;
