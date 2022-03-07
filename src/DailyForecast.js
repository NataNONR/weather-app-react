import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./DailyForecast.css";

export default function DailyForecast() {
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
