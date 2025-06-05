function updateWeatherInformation(response) {
  //temperature
  let temperature = Math.round(response.data.temperature.current);
  let temperatureElement = document.querySelector(".weather-temperature");
  //humidity
  let humidity = response.data.temperature.humidity;
  let humidityElement = document.querySelector(".humidity");
  //wind
  let windSpeed = response.data.wind.speed;
  let windSpeedElement = document.querySelector(".wind-speed");
  //city
  let newCity = response.data.city;
  let cityElement = document.querySelector(".weather-data-city");
  // condtion
  let weatherCondition = response.data.condition.description;
  let weatherConditionElement = document.querySelector(".weather-condition");
  //condition emoji
  let conditionEmojiURL = response.data.condition.icon_url;
  let emojiElement = document.querySelector(".weather-emoji");

  //time and date
  let dateElement = document.querySelector(".day-and-time");
  let timestamp = response.data.time;
  let fullDate = new Date(timestamp * 1000);
  let currentWeekDay = getWeekday(fullDate.getDay());
  let hours = fullDate.getHours();
  let minutes = fullDate.getMinutes();
  let currentDate = `${currentWeekDay} ${hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }`;

  //changes
  temperatureElement.innerHTML = temperature;
  humidityElement.innerHTML = humidity;
  windSpeedElement.innerHTML = windSpeed;
  cityElement.innerHTML = newCity;
  dateElement.innerHTML = currentDate;
  weatherConditionElement.innerHTML = weatherCondition;
  emojiElement.innerHTML = `<img src="${conditionEmojiURL}" alt="${response.data.condition.icon} emoji">`;
}

function getWeekday(num) {
  return [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ][num];
}

function searchCity(city) {
  let apiKey = "aef1757e37906f8atc32b9da5odbc24a";
  let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
  axios.get(apiURL).then(updateWeatherInformation);
}

function handleSearchButton(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector(".search-form-input");
  searchCity(searchInputElement.value);
}

let searchForm = document.querySelector(".search-form");
searchForm.addEventListener("submit", handleSearchButton);

searchCity("Los Angeles");
