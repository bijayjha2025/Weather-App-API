
const apiKey = "yourAPIkey";
const apiUrl = "apiurl";

async function checkWeather(cityName) {
    const response = await fetch(apiUrl + cityName + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);
    
    document.querySelector(".temperatureShow").innerHTML= Math.round(data.main.temp) + "°C";
    document.querySelector(".cityName").innerHTML= data.name;
    document.querySelector(".humidity").innerHTML= data.main.humidity + "%";
    document.querySelector(".wind").innerHTML= data.wind.speed + "km/hr";
}

checkWeather();

// const weatherCondition = data.weather[0].main;

// if (weatherCondition === "Clouds"){
//     weatherIcon.src = "cloudIcon.png";
// }
// else if (weatherCondition === "Clear"){
//     weatherIcon.src = "clearSky.png";
// }
// else if (weatherCondition === "Rain"){
//     weatherIcon.src = "rainyIcon.png"; 
// }
// else if (weatherCondition === "Drizzle"){
//     weatherIcon.src = "drizzleIcon.png";
// }
// else if (weatherCondition === "Mist"){
//     weatherIcon.src = "mistIcon.png";
// }
// else{
//     weatherIcon.src = "default.png";
// }