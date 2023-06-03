function getWeather() {
    var cityInput = document.getElementById("cityInput").value;
    var apiKey = '86f08527e6dc426c80293010230306'; // Replace with your API key
  
    fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityInput}`)
      .then(response => response.json())
      .then(data => {
        var weatherOutput = document.getElementById("weatherOutput");
        weatherOutput.innerHTML = `
          <h2>${data.location.name}, ${data.location.country}</h2>
          <p><i class="fas fa-thermometer-three-quarters"></i> Temperature: ${data.current.temp_c}°C</p>
          <p><i class="fas fa-cloud"></i> Condition: ${data.current.condition.text}</p>
        `;
        weatherOutput.classList.add('fade-in');
      })
      .catch(error => {
        console.error('Error:', error);
        var weatherOutput = document.getElementById("weatherOutput");
        weatherOutput.innerHTML = '<p>Error retrieving weather data.</p>';
        weatherOutput.classList.add('fade-in');
      });
  }
  