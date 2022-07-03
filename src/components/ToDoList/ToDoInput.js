import React, { useCallback, useState } from "react";
import "./ToDo.css";
import { MdAdd } from "react-icons/md";

function ToDoInput({ onInsert }) {
  const [value, setValue] = useState("");

  const onChange = useCallback((event) => {
    setValue(event.target.value);
  }, []);

  const onSubmit = useCallback(
    (event) => {
      event.preventDefault();
      if (value === "") {
        return;
      }

      onInsert(value);
      setValue("");
    },
    [onInsert, value]
  );
  return (
    <form className="ToDoInput" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Write your to do"
        value={value}
        onChange={onChange}
      ></input>
      <button type="submit" onSubmit={onSubmit}>
        <MdAdd />
      </button>
    </form>
  );
}

export default ToDoInput;
