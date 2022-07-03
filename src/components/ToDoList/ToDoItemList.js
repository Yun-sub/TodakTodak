import React from "react";
import TodoItem from "./ToDoItem";
import "./ToDo.css";

function TodoItemList({ todos, onRemove, onToggle }) {
  return (
    <div className="ToDoItemList">
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

export default TodoItemList;
