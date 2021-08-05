//Global variables that are used throughout functionality
const apiKey = `fca1955459bd82830eba1555a57b84ca`;
const searchBtn = document.querySelector("#search");
const divContainer = document.querySelector("#container");
const weatherSearchDiv = document.createElement("div");
const weatherForecast = document.querySelector(".forecast-container");
let searchValue = "";

//Async await function that calls on api
//assign the data that is fetched from the api to a constant.
const getWeatherData = async () => {
  searchValue = document.querySelector("#weather-input").value;
  removeCurrentWeather(weatherSearchDiv);
  // removeCurrentWeather();
  try {
    const find = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=${apiKey}`
    );
    const weatherData = find.data;
    const lat = weatherData.coord.lat;
    const lon = weatherData.coord.lon;
    const findForecast = await axios.get(
      `https://api.troposphere.io/forecast/${lat},${lon}?token=1f04e75602d0534928c5e51adf08122f4dd12a89aed11cfb5c`
    );
    const dailyForecast = findForecast.data.data.daily;
    console.log(dailyForecast);
    // console.log(lon);
    // console.log(lat);
    // console.log(weatherData);
    // console.log(findForecast);
    renderData(weatherData);
    renderForecast(dailyForecast);
  } catch (error) {
    console.error(error);
  }
};

//On clicking the search button getWeatherData is called on and it's
//corresponding functions
searchBtn.addEventListener("click", getWeatherData);

function renderForecast(data) {
  data.forEach((day) => {
    let dailyData = `
    <div class="daily-data-container">
      <h4>${day.type}</h4>
      <p>temp: ${Math.floor(day.temperature)}</p>
      <p>temp_min: ${Math.floor(day.temperatureMin)}</p>
      <p>temp_max: ${Math.floor(day.temperatureMax)}</p>
      <p>humidity: ${Math.floor(day.relHumidity)}</p>
    </div>
    `;
    weatherForecast.insertAdjacentHTML("beforeend", dailyData);
  });
}

//renderData function builds elements and assigns data to each element,
//all elements are stored in weatherSearchDiv which is appened to divContainer.
function renderData(data) {
  weatherSearchDiv.classList.add("current-weather");
  divContainer.append(weatherSearchDiv);

  //Name of Location
  const name = document.createElement("h1");
  name.textContent = `${data.name}`;
  weatherSearchDiv.append(name);

  //Icon(which is in weather)
  const icon = document.createElement("img");
  icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
  weatherSearchDiv.append(icon);

  //Weather info-Main
  const weather = document.createElement("h2");
  weather.textContent = `${data.weather[0].main}`;
  weatherSearchDiv.append(weather);

  //Main temp info of location
  const mainArr = Object.entries(data.main);
  mainArr.forEach((value) => {
    const temp = document.createElement("p");
    temp.textContent = `${value[0]}:  ${value[1]}`;
    weatherSearchDiv.append(temp);
  });
}
//This function removes current weatherDiv when a new search is initiated.
function removeCurrentWeather(element) {
  while (element.lastChild) {
    element.removeChild(element.lastChild);
  }
}

// PMVP'S

//function displayNearbyWeather {
// In the side bar of page on search of CW location the nearest 5(?) locations weather will also pop up. these 5 other locations will be appended to side bar and will show the same data as the CW div but the other current weather divs (OCW) will be much smaller.
// }

//function displayEmojis() {
// Create functionality that has a drop down on div load that represents the weather in emojis(if(rain) return rain coat),
// (if(temp > 80) return hotface)
//On drop down emojis opacity fills in starting from bottom to create drawer opening effect. Addeventlistener. When "drawer” closes top of emoji filters out to create shutting effect
//}

//function emojiText() {
// On addEventListener('mouseover', showStrings(emojis) a string will pop up on div with relevant "friendly saying". On mouseover snowflake "Dress warm, don't want you to catch a chill!"(possibly find api for "sayings" and connect winter/cold weather sayings to cold weather emojis, hot weather sayings for hot weather emojis, etc)
// }

//function animateEmojis() {
//Add animation on emojis relevant to emoji/weather. Rainingsnowflakes, swaying tree branches
//}

//function allWeatherInfo() {
//Have a clickable element on CW that when clicked will have a simple pop up box that displays all possible current weather info.
// }
