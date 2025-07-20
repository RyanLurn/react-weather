import Search from "./components/search";
import "./app.css";
import { useState } from "react";
import { getCurrentWeather } from "./lib/functions/get-current-weather";
import WeatherCard from "./components/weather-card";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  function handleChange(e) {
    setCity(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const targetCity = city;
    setCity("");
    const data = await getCurrentWeather(targetCity);
    setWeatherData(data);
  }

  return (
    <div id="app">
      <hgroup>
        <h1>React Weather</h1>
        <p>Enter a city name to get the weather</p>
      </hgroup>
      <Search
        city={city}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      {weatherData && (
        <WeatherCard condition={weatherData.current.condition.text} />
      )}
    </div>
  );
}

export default App;
