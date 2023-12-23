import React, { useState } from "react";
import "./WeatherApp.css";
import WeatherCard from "./WeatherCard";

function App() {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setloading] = useState(false);
  const [error, setError] = useState(null);

  let apiKey = "6334078e89684d5ba86154449232312";

  const fetchWeatherData = () => {
    setloading(true);
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          alert("Failed to fetch weather data");
          setError(data.error.message);

          setWeatherData(null);
        } else {
          console.log(loading);
          setError(null);
          console.log(data);
          setWeatherData(data);
        }
      })
      .catch((error) => {
        alert("Failed to fetch weather data");
        setError("An error occurred while fetching data.");
        setWeatherData(null);
      })
      .finally(() => {
        setloading(false);
      });
  };

  return (
    <div className="App">
      <section className="App-header">
        <h1>Weather App</h1>
      </section>
      <div className="search-box">
        <div id="inputSearch">
          <input
            className="input-bar"
            type="text"
            placeholder="Enter city name"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <button className="search" onClick={fetchWeatherData}>
            Search
          </button>
        </div>
        
      </div>
      {(loading && weatherData) ? <p className="loading">Loading data…</p> : null}
      {/* {error && <div className="error-message">{error}</div>} */}
      {weatherData && <WeatherCard data={weatherData} />}
    </div>
  );
}

export default App;
