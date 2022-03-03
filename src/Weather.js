import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter city name"
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h1>Singapore</h1>
      <ul>
        <li>Monday 08:00</li>
        <li>Sunny</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="degreeSection">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="partly cloudy"
              className="float-left"
            />
            <div className="numberSection float-left">
              <span className="temp">10</span>
              <span className="unit">°C |°F</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 10%</li>
            <li>Humidity: 5%</li>
            <li>Windspeed: 10 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
