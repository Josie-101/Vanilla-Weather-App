function formatDate(timestamp) {
let date = new Date(timestamp);
 let days = [
   "Sunday",
   "Monday",
   "Tuesday",
   "Wednesday",
   "Thursday",
   "Friday",
   "Saturday",
 ];
let hours = date.getHours();
if (hours < 10) {
    hours = `0${hours}`;
}
let minutes = date.getMinutes();
if (minutes < 10) {
    minutes = `0${minutes}`;
}
let day  = days[date.getDay()];
return `${day} ${hours}:${minutes}`;
}


function displayTemperature(response) {
let temperature = document.querySelector("#temperature");
let city =document.querySelector("#city");
let description = document.querySelector("#description");
let humidity = document.querySelector("#humidity");
let wind = document.querySelector("#wind");
let date = document.querySelector("#date");
let icon = document.querySelector("#icon");

celciusTemperature = response.data.main.temp;

temperature.innerHTML = Math.round(response.data.main.temp);
city.innerHTML = response.data.name;
description.innerHTML = response.data.weather[0].description;
humidity.innerHTML = response.data.main.humidity;
wind.innerHTML = Math.round(response.data.wind.speed);
date.innerHTML = formatDate(response.data.dt * 1000);
icon.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`);
icon.setAttribute("alt", response.data.weather[0].icon);
}



function handleSubmit(event) {
    event.preventDefault();
    let cityInputElement = document.querySelector("#city-input");
    search(cityInputElement.value);
    }

function search(city) {
let apiKey = "9ed18fb70d0b270f7a828de481fab593";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayTemperature);
}

function showFahrenheitTemperature(event) {
    event.preventDefault();
    let temperature = document.querySelector("#temperature");
    celciusLink.classList.remove("active");
    fahrenheitLink.classList.add("active");
    let fahrenheitTemperature = (14 * 9) / 5 + 32;
    temperature.innerHTML = Math.round(fahrenheitTemperature);
}

function showcelciusTemperature(event) {
    event.preventDefault();
    let temperature = document.querySelector("#temperature");
      celciusLink.classList.add("active");
      fahrenheitLink.classList.remove("active");
    temperature.innerHTML = Math.round(celciusTemperature);
}

let celciusTemperature = null;

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", showFahrenheitTemperature);

let celciusLink = document.querySelector("#celcius-link");
celciusLink.addEventListener("click", showcelciusTemperature);

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

search("New York");