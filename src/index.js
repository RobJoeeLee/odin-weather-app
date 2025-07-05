import "./style.css";
import { fetchWeather } from "./api";
import { displayWeather } from "./dom";

const form = document.getElementById("location-form");
const input = document.getElementById("location-input");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const location = input.value.trim();
  if (!location) return;

  const weatherData = await fetchWeather(location);
  console.log("User-submited weather data:", weatherData);

  input.value = "";
});
