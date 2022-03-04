import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("metric");

  function showToFahrenheit(event) {
    event.preventDefault();
    setUnit("imperial");
  }

  function showToCelcius(event) {
    event.preventDefault();
    setUnit("metric");
  }

  if (unit === "metric") {
    return (
      <div className="WeatherTemp">
        <span className="temp">{Math.round(props.celcius)}</span>
        <span className="unit">
          °C |
          <a href="/" onClick={showToFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celcius * 9) / 5 + 32;
    return (
      <div className="WeatherTemp">
        <span className="temp">{Math.round(fahrenheit)}</span>
        <span className="unit">
          <a href="/" onClick={showToCelcius}>
            °C
          </a>
          | °F
        </span>
      </div>
    );
  }
}
