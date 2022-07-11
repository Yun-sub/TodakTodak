import React, { useCallback, useState } from "react";
import "./ToDo.css";
import { MdClose } from "react-icons/md";

function ToDoInput({ onInsert, onCloseView }) {
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
    <div className="ToDoInputContainer">
      <button className="ToDoInputCloseBtn" onClick={onCloseView}>
        <MdClose />
      </button>
      <h2>새 일정 추가</h2>
      <form className="ToDoInput" onSubmit={onSubmit}>
        <dl>
          <dt>일정</dt>
          <dd>
            <input
              className="ToDoInputBox"
              type="text"
              placeholder="할 일을 적어주세요"
              value={value}
              onChange={onChange}
            ></input>
          </dd>
          <dt>날짜</dt>
          <dd>
            <input
              className="ToDoInputBox"
              type="text"
              placeholder="예) 7월 12일 월요일"
              value={""}
              onChange={onChange}
            ></input>
          </dd>
        </dl>
        <button className="ToDoInputSaveBtn" type="submit" onSubmit={onSubmit}>
          저장
        </button>
      </form>
    </div>
  );
}

export default ToDoInput;
