import React, { useState } from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";
import "./DailyForecast.css";

export default function DailyForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="DailyForecast">
        <div className="row">
          <div className="col">
            <div className="DailyForecast-day">{forecast[0].dt}</div>
            <WeatherIcon code={forecast[0].weather[0].icon} size={34} />
            <div className="DailyForecast-temp">
              <span className="TempMin">{forecast[0].temp.min}°</span>
              <span className="TempMax">{forecast[0].temp.max}°</span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "c4be51f5046646283f0c3e060fe5427e";
    let lat = props.coordinates.lat;
    let long = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
