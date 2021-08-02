const apiKey = `fca1955459bd82830eba1555a57b84ca`;
const searchBtn = document.querySelector("#search");
let searchValue = "";
const divContainer = document.querySelector("#container");
const weatherSearchDiv = document.createElement("div");
// const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=${apiKey}`;

const getWeatherData = async () => {
  removeCurrentWeather(weatherSearchDiv);
  searchValue = document.querySelector("#weather-input").value;
  try {
    const find = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=${apiKey}`
    );
    const weatherData = find.data;
    console.log(weatherData);

    // weatherData.forEach((weatherSearch) => {
    weatherSearchDiv.classList.add("current-weather");
    divContainer.append(weatherSearchDiv);
    //Need to find way to display all keys from weather and main.
    //Object.keys()?
    //Do I need to loop through anything because
    //my searches only return one location?

    //Name of Location
    const name = document.createElement("h1");
    name.textContent = `${weatherData.name}`;
    weatherSearchDiv.append(name);

    //Icon(which is in weather)
    const icon = document.createElement("img");
    // icon.src =
    // weatherSearchDiv.append(icon);
    console.log(weatherData.weather[0].icon);

    //Weather info -icon
    const weather = document.createElement("h3");
    weather.textContent = `${weatherData.weather[0].description}`;
    weatherSearchDiv.append(weather);

    //Main temp info of location
    const mainArr = Object.entries(weatherData.main);
    mainArr.forEach((value) => {
      const temp = document.createElement("p");
      temp.textContent = `${value[0]}:  ${value[1]}`;
      weatherSearchDiv.append(temp);
    });
    //Wind speed
    const windSpeed = document.createElement("p");
    windSpeed.textContent = `wind speed:  ${weatherData.wind.speed}`;
    weatherSearchDiv.append(windSpeed);
    // });
  } catch (error) {
    console.error(error);
  }
};
searchBtn.addEventListener("click", getWeatherData);

// Save api url to constant variable
//weatherDiv created/selected here

//Global variables here as needed

// Create async await function that sends a request to api using axios.get,
// Async await function weatherData() {
// Log to check data is called correctly
// Save  data to const

// function renderData(render)
// Ask about what im calling on here. I think value of search input will be called on here because I am obtaining data that I will apply to elements.
//  {
// This function to be called on  to create divs and assign the values when calling on api data.
// render.forEach()
// Api data will be called on by going through the data object  which I know is correct by having been able to log it in  the asynchronous weatherData function.
// Assign data to variable/or something that represents the data?
// Create elements and assign them the relevant data called on by navigating through the api data object using dot notation.
// Append these objects to the weatherDiv which in turn will be appended to divContainer.
//Eventually target the future forecast data and append that to the actual CW div so that the future forecast is displayed underneath CW
// }

//function removeCurrentWeather {
// In this function simply remove the divs from the page when a new search is initiated
//}
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
