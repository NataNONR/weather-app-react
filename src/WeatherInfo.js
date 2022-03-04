import React from "react";

import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInformation">
      <h1>{props.info.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.info.date} />
        </li>
        <li className="text-capitalize">{props.info.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="degreeSection">
            <img
              src={props.info.iconURL}
              alt={props.info.description}
              className="float-left"
            />
            <div className="numberSection float-left">
              <span className="temp">{Math.round(props.info.temperature)}</span>
              <span className="unit">°C |°F</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.info.humidity}%</li>
            <li>Windspeed: {props.info.windspeed} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
