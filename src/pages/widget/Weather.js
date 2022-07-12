import { useEffect, useState } from "react";

export default function Weather() {
  const [weather, setWeather] = useState([]);
  let style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

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
          loading: false,
        });
      });
  }, []);
  return (
    <div style={style}>
      <img
        src={"http://openweathermap.org/img/wn/" + weather.icon + "@2x.png"}
      />
      {Math.round(weather.temp - 273)}
      {"\u00B0"}C
    </div>
  );
}
