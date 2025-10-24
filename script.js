
const apiKey = "apikey";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchInputBox = document.querySelector(".searchCity input");
const searchButton = document.querySelector(".searchCity button");
const weatherIcon = document.querySelector(".weatherIcon");

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

    if (data.weather[0].main === "Clouds"){
    weatherIcon.src = "clouds.png";
    }

    else if(data.weather[0].main === "Rain"){
    weatherIcon.src = "rainyIcon.png";
    }

    else if(data.weather[0].main === "Drizzle"){
    weatherIcon.src = "drizzleIcon.png";
    }
    
    else if(data.weather[0].main === "Clear"){
    weatherIcon.src = "clearsky.png"
    }

    else if (data.weather[0].main === "Haze"){
        weatherIcon.src= "hazeIcon.png";
    }

    else if (data.weather[0].main === "Mist"){
        weatherIcon.src = "mistIcon.png";
    }
}

searchButton.addEventListener("click", ()=>{
    checkWeather(searchInputBox.value);
});


