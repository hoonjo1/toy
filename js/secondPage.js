const API_KEY = "c3c494c6cb914ee42ed327cee309c1be";
const secondPage = document.querySelector(".second-page");

function success(event) {
  const latitude = event.coords.latitude;
  const longitude = event.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
  fetch(url)
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
}

function error() {
  console.log("fail");
}

navigator.geolocation.getCurrentPosition(success, error);
