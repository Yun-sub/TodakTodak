import React, { useState } from "react";
import NavBar from "./components/NavBar";
import WeatherBar from "./components/WeatherBar";
import Today from "./components/Today";
import "./styles.css";
import Main from "./pages/Main";
import Analysis from "./pages/Analysis";
import Setting from "./pages/Setting";

function App() {
  const [index, setIndex] = useState("0");
  const onSelect = (value) => {
    setIndex(value);
  };

  return (
    <div className="header">
      <NavBar onSelect={onSelect} />
      <div className="header2" style={{ display: "flex" }}>
        <WeatherBar />
        <Today />
      </div>
      <div className="main" style={{ display: "flex" }}>
        {index === "0" ? <Main /> : null}

        {index === "1" ? <Analysis /> : null}

        {index === "2" ? <Setting /> : null}
      </div>
    </div>
  );
}

export default App;
