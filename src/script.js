function updateWeatherInformation(response) {
  let temperature = Math.round(response.data.temperature.current);
  let newCity = response.data.city;
  let temperatureElement = document.querySelector(".weather-temperature");
  let cityElement = document.querySelector(".weather-data-city");
  temperatureElement.innerHTML = temperature;
  cityElement.innerHTML = newCity;
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
