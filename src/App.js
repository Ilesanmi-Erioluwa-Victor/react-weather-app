import { useState } from "react";
import logo from "./weather.svg";
import Currentweather from "./components/search/current-weather/current-weather";
import Forecast from "./components/search/forecast/forecast";
import Search from "./components/search/search";

import { Openweathermap_url } from "./api";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const onHandleStateChange = (searchTerm) => {
    const [lat, lon] = searchTerm.value.split("");

    const currentWeatherFetch = fetch(
      `${Openweathermap_url}/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_KEY}&units=metric`
    );

    const forecastFetch = fetch(
      `${Openweathermap_url}/forecast?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherFetchResult = await response[0].json();
        const forecastFetchResult = await response[1].json();

        setCurrentWeather({ city: searchTerm.label, ...weatherFetchResult });
        setForecast({ city: searchTerm.label, ...forecastFetchResult });
      })
      .catch((err) => console.log(err))
      .finally(console.log("Done Fetching api..."));

    console.log(currentWeather, forecast);
  };
  return (
    <div className="container">
      <img src={logo} alt="My Logo" loading="lazy" className="logo"/>
      <div className="content">
        <Search onSearchChange={onHandleStateChange} />
        {/* Pop up results if they exist */}
        {currentWeather && <Currentweather data={currentWeather} />}
        {forecast && <Forecast data={forecast} />}
      </div>
    </div>
  );
}

export default App;
