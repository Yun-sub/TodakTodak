import "react-calendar/dist/Calendar.css";
import { Grid } from "@mui/material";
import MyTodo from "./toDo/MyTodo";
import Item from "../Item";
import Weather from "./widget/Weather";
import MyCalender from "./caLendar/MyCalendar";
import { useState } from "react";
import moment from "moment";

function Main() {
  const [selDate, setDate] = useState(new Date());
  return (
    <div>
      <Weather />
      <Grid container direction='column' spacing={0.5}></Grid>
      <Grid container spacing={2} alignItems='center' justifyContent='center'>
        <Grid item xs={7} sm={6}>
          <Item>
            <MyCalender selDate={selDate} setDate={setDate} />
          </Item>
        </Grid>
        <Grid item xs={5} sm={2}>
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
