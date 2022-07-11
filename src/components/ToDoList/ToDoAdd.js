import React from "react";
import "./ToDo.css";
import { MdAdd } from "react-icons/md";

function ToDoAdd({ onView }) {
  return (
    <div className="ToDoAdd">
      <button className="ToDoAddButton" onClick={onView}>
        <MdAdd />
        일정추가
      </button>
    </div>
  );
}

export default ToDoAdd;
