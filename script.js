
const apiKey = "";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchInputBox = document.querySelector(".searchCity input");
const searchButton = document.querySelector(".searchCity button");

async function checkWeather(cityName) {
    const response = await fetch(apiUrl + cityName + `&appid=${apiKey}`);
    var data = await response.json();

    if (!response.ok){
        alert("City not found! Please try again with another city.");
        return;
    }

    console.log(data);
    
    document.querySelector(".temperatureShow").innerHTML= Math.round(data.main.temp) + "°C";
    document.querySelector(".cityName").innerHTML= data.name;
    document.querySelector(".humidity").innerHTML= data.main.humidity + "%";
    document.querySelector(".wind").innerHTML= data.wind.speed + "km/hr";
}

searchButton.addEventListener("click", ()=>{
    checkWeather(searchInputBox.value);
})

