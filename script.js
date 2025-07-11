const inputBox = document.getElementById("inputBox");
const searchIcon = document.getElementById("searchIcon");
const temperature = document.getElementById("temperature");
const cityName = document.getElementById("cityName");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const img = document.getElementById("img");


const apiKey = "19e6ff36f0c58df004229ac8d7d8c56f";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

searchIcon.addEventListener('click', async() => {
  const city = inputBox.value;

  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
 
  if (response.status == 404 || !city) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".display-container").style.display = "none";
    setTimeout(() => {
      document.querySelector('.error').style.display = 'none';
    },3000)
    return;
  }
  else{
    const data = await response.json();
    console.log(data);  

    temperature.textContent = `${data.main.temp} °C`;
    cityName.textContent = data.name;
    humidity.textContent = `${data.main.humidity}%`;
    wind.textContent = `${data.wind.speed} km/h`;

    if (data.weather[0].main == "Clouds") {
      img.src = "clouds.png";
    } 
    else if (data.weather[0].main == "Clear") {
      img.src = "clear.png";
    } 
    else if (data.weather[0].main == "Rain") {
      img.src = "rain.png";
    }
    else if (data.weather[0].main == "Drizzle") {
      img.src = "drizzle.png";
    } 
    else if (data.weather[0].main == "Mist") {
      img.src = "mist.png";
    }
    document.querySelector(".display-container").style.display = "block";
}
})


//  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);