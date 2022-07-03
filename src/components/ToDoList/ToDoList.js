import React, { useCallback, useRef, useState } from "react";
import ToDoItemList from "./ToDoItemList.js";
import ToDoInput from "./ToDoInput.js";
import "./ToDo.css";

function ToDoList() {
  const [todos, setTodos] = useState([]);
  const nextId = useRef(1);

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

  return (
    <div>
      <ToDoInput onInsert={onInsert} />
      <ToDoItemList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </div>
  );
}
export default ToDoList;
