import React from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";
import "./DailyForecast.css";

export default function DailyForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  const apiKey = "c4be51f5046646283f0c3e060fe5427e";
  let lat = props.coordinates.lat;
  let long = props.coordinates.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="DailyForecast">
      <div className="row">
        <div dailyForecast="col">
          <div className="DailyForecast-day">MON</div>
          <WeatherIcon code="01d" size={34} />
          <div className="DailyForecast-temp">
            <span className="TempMin">10°</span>
            <span className="TempMax">25°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
