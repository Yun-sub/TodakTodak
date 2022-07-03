import React from "react";
import "./ToDo.css";

const ToDoTitle = ({ children }) => {
  return (
    <div className="ToDoTitle">
      <div className="tdtitle">To Do List</div>
      <div className="content">{children}</div>
    </div>
  );
};

export default ToDoTitle;
