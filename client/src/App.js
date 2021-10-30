import React from "react";
import { createGlobalStyle } from "styled-components";
import ToDoTemplate from "./components/ToDoTemplate/ToDoTemplate";
import ToDoHead from "./components/ToDoHead/ToDoHead";
import ToDoList from "./components/ToDoList/ToDoList";
import TodoCreate from "./components/ToDoCreate/ToDoCreate";
import { ToDoProvider } from "./reducers/ToDoContext";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef
  }
`;

function App() {
  return (
    <ToDoProvider>
      <GlobalStyle />
      <ToDoTemplate>
        <ToDoHead />
        <ToDoList />
        <TodoCreate />
      </ToDoTemplate>
    </ToDoProvider>
  );
}

export default App;
