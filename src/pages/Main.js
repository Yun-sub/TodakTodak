import "react-calendar/dist/Calendar.css";
import { Grid, Button } from "@mui/material";
import MyTodo from "./toDo/MyTodo";
import Item from "../Item";
import Weather from "./widget/Weather";
import MyCalender from "./caLendar/MyCalendar";
import { useState } from "react";
import moment from "moment";

function Main() {
  const [selDate, setDate] = useState(new Date());
  const [view, setView] = useState(false);

  const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "200px",
    bottom: "0px",
    margin: "0 auto",
    left: "0",
    right: "0",
    position: "fixed",
  };

  return (
    <div>
      <Weather />
      <Grid container direction='column' spacing={0.5}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          alignItems='center'
          justifyContent='center'>
          <Grid item xs={7} sm={6}>
            <Item>
              <MyCalender selDate={selDate} setDate={setDate} />
            </Item>
            {view ? (
              <Item>
                <MyTodo />
              </Item>
            ) : null}
          </Grid>
        </Grid>
      </Grid>
      <Button
        style={style}
        variant='contained'
        onClick={() => {
          setView(!view);
        }}>
        {moment(selDate).format("YYYY년 MM월 DD일")} <br /> 할 일 추가하기
      </Button>
    </div>
  );
}

export default Main;
