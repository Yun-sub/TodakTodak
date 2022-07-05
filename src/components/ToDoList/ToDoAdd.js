import React from "react";
import "./ToDo.css";
import { MdAdd, MdOutlineClose } from "react-icons/md";

function ToDoAdd({ onView, onNoView }) {
  return (
    <div className="ToDoAdd">
      <button onClick={onView}>
        <MdAdd />
      </button>
      <button onClick={onNoView}>
        <MdOutlineClose />
      </button>
    </div>
  );
}

export default ToDoAdd;
