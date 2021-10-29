import React from "react";
import ToDoItem from "../ToDoItem/ToDoItem";
import "./ToDoListStyle.css";

function ToDoList() {
  return (
    <div class="ToDoListBlock">
      <ToDoItem status={true} text="프로젝트 생성하기" />
      <ToDoItem status={true} text="필요한 컴포넌트 정리하기" />
      <ToDoItem status={true} text="컴포넌트 생성하기" />
      <ToDoItem status={false} text="컴포넌트 디자인하기" />
    </div>
  );
}

export default ToDoList;
