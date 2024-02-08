const apiKey = "2a4f433a196698b4ccc993e8b699094f";
const apiUrl= "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="
const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")
        async function checkWeather(city){
            const response = await fetch(apiUrl +city+`&appid=${apiKey}`)
            let data = await response.json()
            console.log(data)
          if(data.cod=="404"){

           document.querySelector(".error").style.display = "block"
           document.querySelector(".weather").style.display = "none"
         
          }else{
            document.querySelector(".error").style.display = "none"
            document.querySelector(".weather").style.display = "block" 
            document.querySelector(".city").innerHTML = data.name;
          document.querySelector(".temp").innerHTML = data.main.temp+'°c';//math.round()
          document.querySelector(".humidity").innerHTML = data.main.humidity+'%';
          document.querySelector(".wind").innerHTML = data.wind.speed+' km/h';
          }
            
          

            if(data.weather[0].main=="clouds"){
                weatherIcon.src = "images/clouds.png"
            }else if(data.weather[0].main=="Rain"){
                weatherIcon.src = "images/rain.png"
            }else if(data.weather[0].main=="Drizzle"){
                weatherIcon.src = "images/drizzle.png"
            }else if(data.weather[0].main=="Mist"){
                weatherIcon.src = "images/mist.png"
            }/*else if(data.weather[0].main=="Clouds"){
                weatherIcon.src = "images/snow.png"
            }*/

        }
        searchBtn.addEventListener("click",()=>{
            checkWeather(searchBox.value)
        })
        