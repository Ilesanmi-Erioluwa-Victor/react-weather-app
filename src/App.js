import { useState } from "react";
import logo from "./weather.svg";
import "./App.css";
import { Openweathermap_url, GEO_API_URI } from "./api";
import { useEffect } from "react";

{
}
function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const onHandleStateChange = (searchTerm) => {
    const [lat, lon] = searchTerm.value.split("");

    const currentWeatherFetch = fetch(
      `${Openweathermap_url}/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_KEY}&units=metric`
    );

    const forecastFetch = fetch(
      `${GEO_API_URI}/forecast?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherFetchResult = await response[0].json();
        const forecastFetchResult = await response[1].json();

        setCurrentWeather({ city: searchTerm.label, ...weatherFetchResult });
        setForecast({ city: searchTerm.label, ...weatherFetchResult });
      })
      .catch((err) => console.log(err))
      .finally(console.log("Done Fetching api..."));
  };
  return <h1>Hello</h1>;
}

export default App;
