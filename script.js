const input = document.querySelector("input");
const btn = document.getElementById("btn");
const icon = document.getElementById("icon");
const weather = document.getElementById("weather");
const description = document.getElementById("description");
const temperature = document.getElementById("temperature");

const apiKey = "ADD_YOUR_API_KEY_USING_OPENWEATHER_API";

btn.addEventListener("click", () => {
  let city = input.value;
  getWeather(city);
});

function getWeather(city) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const iconCode = data.weather[0].icon;
      icon.innerHTML = `<img src="http://openweathermap.org/img/wn/${iconCode}.png" alt="weather icon" />`;

      const weatherCity = data.name;
      const weatherCountry = data.sys.country;
      weather.innerHTML = `City: ${weatherCity}, ${weatherCountry}`;

      let weatherTemp = data.main.temp;
      weatherTemp = weatherTemp - 273;
      const temp = weatherTemp.toFixed(2);
      temperature.innerHTML = `Weather: ${temp}°C`;

      let weatherDes = data.weather[0].description;
      const capitalizedDescription =
        weatherDes.charAt(0).toUpperCase() + weatherDes.slice(1);
      description.innerHTML = `Description: ${capitalizedDescription}`;
    });
}
