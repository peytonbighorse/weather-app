function getForecast(city) {
  let apiKey = "aef1757e37906f8atc32b9da5odbc24a";
  let apiURL = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=imperial`;
  axios.get(apiURL).then(displayForecast);
}

function displayForecast(response) {
  console.log(response.data);

  let forecastElement = document.querySelector(".forecast-container");

  let forecastHTML = "";

  response.data.daily.forEach(function (day, index) {
    let timestamp = day.time;
    let fullDate = new Date(timestamp * 1000);
    let highTemp = Math.round(day.temperature.maximum);
    let lowTemp = Math.round(day.temperature.minimum);
    let weatherIcon = day.condition.icon_url;
    if (index < 5) {
      forecastHTML += `
    <div class="daily-forecast">
            <div class="daily-forecast-day">${getAbbreviatedWeekday(
              fullDate.getDay()
            )}</div>
            <div ><img src="${weatherIcon}" class="daily-forecast-icon"/></div>
            <div class="daily-forecast-temps">
              <span class="high-temp">${highTemp}°</span>
              <span class="low-temp">${lowTemp}°</span>
            </div>
          </div>
    `;
    }
  });
  forecastElement.innerHTML = forecastHTML;
}

function getAbbreviatedWeekday(num) {
  return ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][num];
}
getForecast("Los Angeles");
