function displayForecast() {
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
displayForecast();
