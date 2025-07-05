function displayWeather(weather) {
  const display = document.getElementById("weather-display");

  display.innerHTML = `
        <h2>Weather in ${weather.location}</h2>
        <p><strong>Date:</strong> ${weather.date}</p>
        <p><strong>Temperature:</strong> ${weather.temperature}°F</p>
        <p><strong>Feels Like:</strong> ${weather.feelsLike}°F</p>
        <p><strong>Conditions:</strong> ${weather.conditions}</p>
    `;
}

export { displayWeather };
