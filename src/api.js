const API_KEY = "C34YB34KU24R89EZLUYW2CYBD";

async function fetchWeather(location) {
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(
    location
  )}?unitGroup=us&key=${API_KEY}&contentType=json`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`API error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    const simplifiedWeatherData = processWeatherData(data);
    console.log(simplifiedWeatherData);
    return simplifiedWeatherData;
  } catch (error) {
    console.error("Error fetching weather data", error);
  }
}

function processWeatherData(data) {
  const today = data.days[0];

  return {
    location: data.address,
    date: today.datetime,
    temperature: today.temp,
    feelsLike: today.feelslike,
    conditions: today.conditions,
    icon: today.icon,
  };
}

export { fetchWeather };
