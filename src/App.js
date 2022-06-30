import React, { useState, useRef } from "react";
import Todo from "./Todo";
import AddToDo from "./AddToDo";


function App() {
  const nextId = useRef(0);
  const [toDos, setTodos] = useState([]);
  const [inputs, setInputs] = useState("");
  const {text} = inputs;

  const onChange = (event) => {
    const text = event.target.value;    
    setInputs({...inputs, text});
  };

  const onCreate = () => {
    const todo = {
      id: "td00" + nextId.current,
      text
    };
    if(text === ""){
      return;
    }
    setTodos([...toDos, todo]);
    setInputs({text: ""});
    nextId.current += 1;

  };

  const onSubmit = (event) => {
    event.preventDefault();
    if(text === ""){
      return;
    }
    const todo = {
      id: "td00" + nextId.current,
      text
    };
    setInputs({text: ""});
    setTodos([...toDos, todo]);

    nextId.current += 1;
  };

  const onRemove = (id) => {
    setTodos(toDos.filter((todo) => todo.id !== id));
  };


  return (
    <div>
      <AddToDo text = {text} onSubmit = {onSubmit} onChange = {onChange} onCreate = {onCreate}/>
      {toDos.map((todo) => (
        <Todo toDos={todo} key={todo.id} onRemove={onRemove} />
      ))}
    </div>
  );
}

export default App;