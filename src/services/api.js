const serverUrl = "http://api.openweathermap.org/data/2.5/weather";
const apiKey = "f660a2fb1e4bad108d6160b7f58c555f";

export async function getWeatherCity(cityName) {
  const weather = await fetch(`${serverUrl}?q=${cityName}&appid=${apiKey}`);
  return weather.json();
}
