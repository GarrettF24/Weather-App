//Global variables that are used throughout functionality
const apiKey = `fca1955459bd82830eba1555a57b84ca`;
const searchBtn = document.querySelector("#search");
const divContainer = document.querySelector("#container");
const weatherSearchDiv = document.createElement("div");
const weatherForecast = document.querySelector(".forecast-container");
let searchValue = "";

//Async await function that calls on api
//assign the data that is fetched from the api to a constant.
//2nd api utilizes the first api's coordinates from the search.
const getWeatherData = async () => {
  searchValue = document.querySelector("#weather-input").value;
  removeCurrentWeather(weatherSearchDiv);
  removeCurrentWeather(weatherForecast);
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
    renderData(weatherData);
    renderForecast(dailyForecast);
  } catch (error) {
    console.error(error);
  }
};

//On clicking the search button getWeatherData is called on and it's
//corresponding functions
searchBtn.addEventListener("click", getWeatherData);
//use string interpolation to assign data to the forecast div's. divs are inserted into
//the weatherforecast container.
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

  //Icon
  const icon = document.createElement("img");
  icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
  weatherSearchDiv.append(icon);

  //Weather info-Main
  const weather = document.createElement("h2");
  weather.textContent = `${data.weather[0].main}`;
  weatherSearchDiv.append(weather);

  //Main temp info
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
