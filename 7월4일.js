import React, { useState } from "react";

//칼렌더 라이브러리
import Calendar from 'react-calendar';

function MyApp() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo ==="") {
      return;
    }
    
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };
  return (
    <div>
      <h1>ToDDakToDDak </h1>
      <button> 메인 | 분석 </button>
      <input type = "time"></input>
    <input type = "datetime-local"></input>
      <h3> 오늘 할 일 </h3> 
      <form onSubmit={onSubmit}>
        <input
        onChange={onChange} 
        value =  {toDo} 
        type = "text" 
        placeholder="please write your To Do"></input>
        <button> Add To Do </button>
        <button> delete</button>
        <button> + </button>
        <section>
        <div>
        <button style = {{
          backgroundColor: "gray",
          color:"white",
          borderRadius:10,
        }}>저장</button>
        </div>
        </section>
        <div>
        <button style = {{
          backgroundColor: "black",
          color:"white",
          borderRadius:10,
        }}>취소</button>
        </div>
        <button style = {{
          backgroundColor: "maroon",
          color:"white",
          borderRadius:10,}}>미루기</button>

      </form>
      <form>
        <h2> -login- </h2>
        <fieldset>
          <label> 아이디: <input type="text" id = "user_id" size ="10"></input></label>
          <label> 비밀번호: <input type="password" id = "user_pw" size ="10"></input></label>
          <input type = "submit" value = "로그인"></input>
        </fieldset>
      </form>
      <hr/>
      <ul>
        {toDos.map((item,index) => (<li key ={index}> {item} </li>))}
      </ul>
    </div>

  );
}
export default App; 