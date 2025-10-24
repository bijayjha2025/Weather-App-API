
const searchInput = document.querySelector(".searchCity input");
const searchButton = document.querySelector(".searchCity button");

const weatherIcon = document.querySelector(".weatherIcon");
const temperatureShow = document.querySelector(".temperatureShow");
const cityName = document.querySelector(".cityName");
const humidityValue = document.querySelector(".humidity");
const windValue = document.querySelector(".wind");

const apiKey = "api-key";
const apiUrl = "";

async function checkWeather(cityName) {
    const apiUrl = ``
}

const data = await response.json();

cityName.textContent = data.cityName;
temperatureShow.textContent = Math.round(data.main.temp) + "°C";
humidityValue.textContent = data.main.humidity + "%";
windValue.textContent = data.wind.speed + "km/hr";
