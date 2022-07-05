import "./Calendar.css";
import Calendar from "react-calendar";
import moment from "moment";

function MyCalender({ setDate, selDate }) {
  return (
    <Calendar
      onChange={setDate}
      value={selDate}
      formatDay={(zz, setDate) => moment(setDate).format("D")}
    />
  );
}

export default MyCalender;
