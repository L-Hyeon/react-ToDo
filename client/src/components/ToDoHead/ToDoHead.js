import React from "react";
import "./ToDoHeadStyle.css";
import { useToDoState } from "../../reducers/ToDoContext";

function ToDoHead() {
  const tasks = useToDoState();
  const remainTasks = tasks.filter((task) => !task.status);
  const today = new Date();
  const dateString = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const dayName = today.toLocaleDateString("ko-KR", { weekday: "long" });

  return (
    <div class="ToDoHeadBlock">
      <div class="date">
        <h1>{dateString}</h1>
        <div class="day">{dayName}</div>
      </div>
      <div class="tasks-left">{remainTasks.length}</div>
    </div>
  );
}

export default ToDoHead;
