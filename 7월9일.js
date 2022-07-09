import { useState } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Nav from 'react-bootstrap/Nav';
import './App.css'

function BasicExample() {
  return (
    <Nav>
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    
      <Nav.Item>
        <Nav.Link href="/home">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

  function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const onChange = (event) => {
    setTodo(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (todo === "") {
      return;
    } 
    else {
      setTodos((current) => [...current, todo]);
      setTodo("");
    }
  };
  const onDelete = (event) => {
    event.target.parentElement.remove();
  }
  return (
    <>
      <div className="h2">
        <h1>ToDotToDot</h1>
      </div>
      <Calendar/>
      <form onSubmit={onSubmit}>
        <input placeholder="할일 입력" value={todo} onChange={onChange} />
        <button style = {{
          backgroundColor: "gray",
          color:"white",
          borderRadius:10,
        }}>추가</button>
      </form>
      {todos.map((element, index) => {
        return (
            <li key={index}>{element}<button onClick={onDelete}
            style = {{
              backgroundColor: "gray",
              color:"white",
              borderRadius:10,
            }}>삭제</button></li>
        );
      })}
    </>
  );
}
export default App;