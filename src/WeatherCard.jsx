import React from "react";
import "./WeatherApp.css";
function WeatherCard({ data }) {
  return (
    <div className="container">
      <div className="weather-card">
        <h2>Temperature</h2>
        <h4>{data.current.temp_c}°C</h4>
      </div>
      <div className="weather-card">
        <h2>Humidity</h2>
        <h4>{data.current.humidity}%</h4>
      </div>
      <div className="weather-card">
        <h2>Condition</h2>
        <h4>{data.current.condition.text}</h4>
      </div>

      <div className="weather-card">
        <h2>Wind Speed</h2>
        <h4>{data.current.wind_kph} kp/h</h4>
      </div>
    </div>
  );
}

export default WeatherCard;
