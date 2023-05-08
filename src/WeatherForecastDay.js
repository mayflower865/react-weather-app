import React from "react"; 
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
 function maxTemperature() {
   let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
 }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }
 
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat",];

    return days[day];
  }
 
    return (
    <div>
       <div className="WeatherForecast-day">{day()}</div>
            <WeatherIcon code={props.data.weather[0].icon} size={35} />
            <div className="WeatherForecast-temperatures">
              <span className="WeatherForecast-temperatures-max">{maxTemperature()}</span>
              <span className="WeatherForecast-temperatures-min">{minTemperature()}</span>
            </div>
            </div>
 );
}