import { useState } from "react";
import logo from "./weather.svg";
import "./App.css";
import { Openweathermap_url } from "./api";
import { useEffect } from "react";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  // useEffect(() => {
  //   Api();
  // }, [Api]);
  return <h1>Hello</h1>;
}

export default App;
