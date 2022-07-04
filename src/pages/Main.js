import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import moment from "moment";
import MyTodo from "./toDo/MyTodo";

function Main() {
  const [selDate, setDate] = useState(new Date());
  const [weather, setWeather] = useState([]);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  useEffect(() => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=7764b29434c955dbfd32e6efda650755"
    )
      .then((res) => res.json())
      .then((data) => {
        setWeather({
          id: data.weather[0].id,
          temp: data.main.temp,
          main: data.weather[0].main,
          icon: data.weather[0].icon,
        });
      });
  }, []);

  return (
    <div>
      <Grid container direction='column' spacing={0.5}>
        <Grid item xs={3} md={2}>
          <img
            src={"http://openweathermap.org/img/wn/" + weather.icon + "@2x.png"}
          />{" "}
          {Math.round(weather.temp - 273)}
          {"\u00B0"}C
        </Grid>
      </Grid>
      <Grid container spacing={2} alignItems='center' justifyContent='center'>
        <Grid item={4.8}>
          <Item>
            <Calendar onChange={setDate} value={selDate} />
          </Item>
        </Grid>
        <Grid item xs={5} md={4}>
          <Item>
            {moment(selDate).format("YYYY년 MM월 DD일")}
            <MyTodo />
          </Item>
        </Grid>
      </Grid>
    </div>
  );
}

export default Main;
