let index = 0;

function weather() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log("------Server response received ----- ");
      let weather = JSON.parse(this.responseText);
      console.log(weather);

      for (let i = 0; i < 5; i++) {
        //date
        let day = weather.list[index].dt_txt.split(" ")[0];
        let day_split = day.split("-");
        let day_europe = `${day_split[2]}.${day_split[1]}.${day_split[0]}`;
        let date = `<h2>${day_europe}</h2>`;

        //temp
        let temp = weather.list[index].main.temp;

        //rain
        let iconCode = weather.list[index].weather[0].icon;
        let iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;
        let rainIcon = `<img src="${iconUrl}" alt="Weather Icon">`;

        //wind
        let windTemp = weather.list[index].wind.deg;
        let windSpeed = weather.list[index].wind.speed;

        //humidity
        let humidity = weather.list[index].main.humidity;

        // Füge die Informationen für jeden Tag hinzu

        document.getElementById("erg").innerHTML += `<div id="id${i}">
                <div class="day-info">${date}</div>
                <div class="weatherInfos">
                    <div class="weather-info"><h2>Temperatur: </h2>${temp}°</div>
                    <div class="weather-info"><h2>Wetter: </h2>${rainIcon}</div>
                    <div class="weather-info"><h2>Wind: </h2>${windTemp}° ${windSpeed}m/s</div>
                    <div class="weather-info"><h2>Luftfeuchtigkeit: </h2>${humidity}%</div>
                </div> </div>`;

        index = index + 8;
      }
    }
  };

  xhttp.open(
    "GET",
    `https://api.openweathermap.org/data/2.5/forecast?lat=48.3064&lon=14.2861&appid=7135a61e926a5b213006514553f2d9b8&units=metric`,
    true
  );
  xhttp.send();
}

weather();
