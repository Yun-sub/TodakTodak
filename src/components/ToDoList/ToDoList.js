import React, { useCallback, useRef, useState } from "react";
import ToDoItemList from "./ToDoItemList.js";
import ToDoInput from "./ToDoInput.js";
import ToDoAdd from "./ToDoAdd.js";
import "./ToDo.css";

function ToDoList() {
  const [todos, setTodos] = useState([]);
  const nextId = useRef(1);
  const [viewToDoInput, setViewToDoInput] = useState(false);

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos]
  );

  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos]
  );

  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo
        )
      );
    },
    [todos]
  );

  const onView = () => {
    setViewToDoInput(true);
  };

  const onNoView = () => {
    setViewToDoInput(false);
  };

  return (
    <div className="main_todolist">
      <ToDoItemList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      {viewToDoInput ? <ToDoInput onInsert={onInsert} /> : null}
      <ToDoAdd onView={onView} onNoView={onNoView} />
    </div>
  );
}
export default ToDoList;
