import { VITE_WEATHER_API_KEY, WEATHER_API_URL } from "../constants";

async function getCurrentWeather(city) {
  const response = await fetch(
    `${WEATHER_API_URL}/current.json?key=${VITE_WEATHER_API_KEY}&q=${city}&aqi=no`
  );

  const data = await response.json();
  console.log("Weather data:", data);

  return data;
}

export { getCurrentWeather };
