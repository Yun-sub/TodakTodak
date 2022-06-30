import React, { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDo("");
    setToDos((currentArray) => [toDo, ...currentArray]);
  };
  const onDelete = (event) => {
    const newToDos = toDos.filter((toDos) => toDos.text !== event);
    setToDos(newToDos);
    event.target.parentElement.remove();
  };
  return (
    <div>
      <h1>My To Do List [Count: {toDos.length}]</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index} style={{ listStyleType: "none" }}>
            <input type="checkbox"></input>
            {item}
            <button onClick={onDelete}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
