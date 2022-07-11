import React, { useState } from "react";
import ToDoList from "../components/ToDoList/ToDoList";
import Calendar from "react-calendar";
import "../styles.css";
import moment from "moment";

function Main() {
  const [value, onChange] = useState(new Date());
  return (
    <div className="main_CalendarTodo" style={{ display: "flex" }}>
      <div className="calendar">
        <Calendar
          onChange={onChange}
          formatDay={(locale, date) => moment(date).format("D")}
          value={value}
          showNeighboringMonth={false}
        />
      </div>
      <div className="selectedTodo">
        <div className="selectedDate">
          {"◈ " + moment(value).format("M월 D일") + " 할 일 ◈"}
        </div>
        <ToDoList />
      </div>
    </div>
  );
}

export default Main;
