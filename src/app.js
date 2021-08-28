function displayTemperature(response) {
let temperature = document.querySelector("#temperature");
let city =document.querySelector("#city");
let description = document.querySelector("#description");
let humidity = document.querySelector("#humidity");
let wind = document.querySelector("#wind");
temperature.innerHTML = Math.round(response.data.main.temp);
city.innerHTML = response.data.name;
description.innerHTML = response.data.weather[0].description;
humidity.innerHTML = response.data.main.humidity;
wind.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "9ed18fb70d0b270f7a828de481fab593";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;

console.log(apiUrl);
axios.get(apiUrl).then(displayTemperature);

