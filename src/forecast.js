function getForecast(city) {
  let apiKey = "aef1757e37906f8atc32b9da5odbc24a";
  let apiURL = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=imperial`;
  axios.get(apiURL).then(displayForecast);
}

function displayForecast(response) {
  console.log(response.data);

  let forecastElement = document.querySelector(".forecast-container");

  let days = ["Fri", "Sat", "Sun", "Mon", "Tue"];
  let forecastHTML = "";

  days.forEach(function (day) {
    forecastHTML += `
    <div class="daily-forecast">
            <div class="daily-forecast-day">${day}</div>
            <div class="daily-forecast-icon">⛈️</div>
            <div class="daily-forecast-temps">
              <span class="high-temp">69°</span>
              <span class="low-temp">50°</span>
            </div>
          </div>
    `;
  });
  forecastElement.innerHTML = forecastHTML;
}
getForecast("Los Angeles");
