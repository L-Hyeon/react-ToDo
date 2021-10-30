import React, { useReducer, createContext, useContext, useRef } from "react";

const initialToDos = [];

function ToDoReducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return state.concat(action.ToDo);
    case "TOGGLE":
      return state.map((task) =>
        task.id === action.id ? { ...task, status: !task.status } : task
      );
    case "REMOVE":
      return state.filter((task) => task.id !== action.id);
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const ToDoStateContext = createContext();
const ToDoDispatchContext = createContext();
const ToDoNextIDContext = createContext();

export function ToDoProvider({ children }) {
  const [state, dispatch] = useReducer(ToDoReducer, initialToDos);
  const nextId = useRef(5);

  return (
    <ToDoStateContext.Provider value={state}>
      <ToDoDispatchContext.Provider value={dispatch}>
        <ToDoNextIDContext.Provider value={nextId}>
          {children}
        </ToDoNextIDContext.Provider>
      </ToDoDispatchContext.Provider>
    </ToDoStateContext.Provider>
  );
}

export function useToDoState() {
  const context = useContext(ToDoStateContext);
  if (!context) {
    throw new Error("Cannot find ToDoProvider");
  }
  return context;
}

export function useToDoDispatch() {
  const context = useContext(ToDoDispatchContext);
  if (!context) {
    throw new Error("Cannot find ToDoProvider");
  }
  return context;
}

export function useToDoNextID() {
  const context = useContext(ToDoNextIDContext);
  if (!context) {
    throw new Error("Cannot find ToDoProvider");
  }
  return context;
}
