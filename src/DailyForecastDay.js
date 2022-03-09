import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function DailyForecastDay(props) {
  function minTemp() {
    let temperature = Math.round(props.daily.temp.min);
    return `${temperature}`;
  }

  function maxTemp() {
    let temperature = Math.round(props.daily.temp.max);
    return `${temperature}`;
  }

  function day() {
    let date = new Date(props.daily.dt * 1000);
    let day = date.getDay();

    let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    return days[day];
  }

  return (
    <div>
      <div className="DailyForecast-day">{day()}</div>
      <WeatherIcon code={props.daily.weather[0].icon} size={34} />
      <div className="DailyForecast-temp">
        <span className="TempMin">{minTemp()}°</span>
        <span className="TempMax">{maxTemp()}°</span>
      </div>
    </div>
  );
}
