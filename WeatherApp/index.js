const APIKey = Enter your API key;
const APIUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
// console.log(APIKey)
// https://api.openweathermap.org/data/2.5/weather?q=Ambernath&appid=b1dc8d5bdf096fde3dccb6834de102ca&units=metric

const City = document.querySelector(".search input");
const Btn = document.querySelector(".search button");

async function GetWeather(city) {
  const response = await fetch(APIUrl + city + `&appid=${APIKey}`);
  console.log(response)
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display="none";
} else {
      let data = await response.json();

    // console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + `°c`;
    document.querySelector(".humidity").innerHTML = data.main.humidity + `%`;
    document.querySelector(".wind").innerHTML = data.wind.speed + ` km/h`;

    // console.log(data.weather[0] .main)

    switch (data.weather[0].main) {
      case "Clear":
        document.querySelector(".weather-icon").src = "assets/clear.png";
        break;
      case "Clouds":
        document.querySelector(".weather-icon").src = "assets/clouds.png";
        break;
      case "Rain":
        document.querySelector(".weather-icon").src = "assets/rain.png";
        break;
      case "Drizzle":
        document.querySelector(".weather-icon").src = "assets/drizzle.png";
        break;
      case "Mist":
        document.querySelector(".weather-icon").src = "assets/mist.png";
        break;
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display="none";
  }
}

Btn.addEventListener("click", () => {
  GetWeather(City.value);
});
