import React from "react";

export default function CurrentWeather({ data }) {
  return (
    <div className="currentWeatherContainer">
      <h2 className="heading">Current Weather Details</h2>
      <div className="header">
        <div className="info">
          <p className="weatherName">{data.name}</p>
          <p className="weatherDescription">The weather is {data.weather[0].main}</p>
          {/* <img src={`icons/${data.weather[0].icon}.png`} alt={data.name} /> */}
        </div>
      </div>

      <div className="bottomInfo">
        <div><p className="temperature"> {data.main.temp}°C</p></div>
        <div className="details">
          <p className="text">Details</p>
          <div className="row">
            <label>Feels Like: </label>
            <p> {data.main.feels_like}°C</p>
          </div>
          <div className="row">
            <label>Humidity: </label>
            <p> {data.main.humidity}pa</p>
          </div>
          <div className="row">
            <label>Presure: </label>
            <p> {data.main.pressure}hPa</p>
          </div>
          <div className="row">
            <label>Wind Speed: </label>
            <p> {data.wind.speed}km/hr</p>
          </div>
        </div>
      </div>
    </div>
  );
}
