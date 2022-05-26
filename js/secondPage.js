const WEATHER_API_KEY = "c3c494c6cb914ee42ed327cee309c1be";
const AIR_API_KEY = "0ca3717b-5a24-40ae-a4d6-4501bce16682";
const secondPage = document.querySelector(".second-page");

function success(event) {
  const latitude = event.coords.latitude;
  const longitude = event.coords.longitude;
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`;
  const airUrl = `https://api.airvisual.com/v2/nearest_city?lat=${latitude}&lon=${longitude}&key=${AIR_API_KEY}`;
  fetch(weatherUrl)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector(".weather");
      const temp = document.querySelector(".temp");
      const humidityI = document.querySelector(".humidity-i");
      const humidity = document.querySelector(".humidity");
      const name = document.querySelector(".name");
      const check = data.weather[0].main;
      if (check === "Clouds") {
        weather.classList.add("fas", "fa-cloud");
      } else if (check === "Clear") {
        weather.classList.add("fas", "fa-sun");
      } else if (check === "Thunderstorm") {
        weather.classList.add("fas", "fa-bolt");
      } else if (check === "Drizzle") {
        weather.classList.add("fas", "fa-water");
      } else if (check === "Rain") {
        weather.classList.add("fas", "fa-umbrella");
      } else if (check === "Snow") {
        weather.classList.add("fas", "fa-snowflake");
      } else if (check === "Atmosphere") {
        weather.classList.add("fas", "fa-somg");
      } else {
        weather.classList.add("fas", "fa-cloud");
      }
      temp.innerText = `${data.main.temp.toFixed(0)}°`;
      humidityI.classList.add("fas", "fa-tint");
      humidity.innerText = `${data.main.humidity}%`;
      name.innerText = `${data.name}, Korea`;
    });
  fetch(airUrl)
    .then((response) => response.json())
    .then((data) => {
      const aqiusI = document.querySelector(".aqius-i");
      const aqius = document.querySelector(".aqius");
      const aqiusS = document.querySelector(".aqius-s");
      const aqiusT = document.querySelector(".aqius-t");
      const value = data.data.current.pollution.aqius;
      //   const value = 160; // TEST
      if (value < 50) {
        aqiusI.classList.add("far", "fa-grin");
        aqiusT.innerText = "좋음";
      } else if (50 < value && value < 100) {
        aqiusI.classList.add("far", "fa-meh");
        aqiusT.innerText = "보통";
      } else if (100 < value) {
        aqiusI.classList.add("far", "fa-tired");
        aqiusT.innerText = "나쁨";
      }
      aqius.innerText = value;
      aqiusS.innerText = "PM 2.5";
    });
}

function error() {
  console.log("fail");
}
navigator.geolocation.getCurrentPosition(success, error);
