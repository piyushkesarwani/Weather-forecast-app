import React, { useState } from "react";
import "./App.css";
import Search from "./Search";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleOnSearchChange = (searchData) => {
    console.log(searchData);

    const [lat, lon] = searchData.value.split(" ");
    console.log("Latitude is: ", lat);
    console.log("Longitude is: ", lon);
    setLoading(true)

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        console.log(weatherResponse, forecastResponse);
        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
        setLoading(false);
      })
      .catch((err) => console.error(err));
  };
  return (
    <>
      <Search onSearchChange={handleOnSearchChange} />
      {loading && <div className="loading">Loading....</div>}
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
    </>
  );
}

export default App;
