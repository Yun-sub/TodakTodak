import React from "react";
import NavBar from "./components/NavBar";
import WeatherBar from "./components/WeatherBar";
import Calendar from "react-calendar";
import Today from "./components/Today";
import "./styles.css";
import "react-calendar/dist/Calendar.css";
import ToDoList from "./components/ToDoList/ToDoList";

function App() {
  return (
    <div className="header">
      <NavBar />
      <div className="header2" style={{ display: "flex" }}>
        <WeatherBar />
        <Today />
      </div>
      <div className="main" style={{ display: "flex" }}>
        <Calendar />
        <ToDoList />
      </div>
    </div>
  );
}

export default App;
