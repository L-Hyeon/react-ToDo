import React from "react";
import "./ToDoHeadStyle.css";

function ToDoHead() {
  return (
    <div class="ToDoHeadBlock">
      <div class="date">
        <h1>2021-10-29</h1>
        <div class="day">FRI</div>
      </div>
      <div class="tasks-left">0</div>
    </div>
  );
}

export default ToDoHead;
