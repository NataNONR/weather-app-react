import React, { useState } from "react";
import axios from "axios";
import DailyForecastDay from "./DailyForecastDay";
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
          {forecast.map(function (eachDay, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <DailyForecastDay daily={eachDay} />
                </div>
              );
            }
            return null;
          })}
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
