import React from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

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
            <div className="icon float-left">
              <WeatherIcon code={props.info.icon} />
            </div>

            <div className="numberSection float-left">
              <WeatherTemperature celcius={props.info.temperature} />

              
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
