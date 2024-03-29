const apiKey = "6bc236fa8bd5e7e03f83fd8cea3eac74";
const cityForm = document.querySelector("#cityForm");
const cityInput = document.querySelector("#cityInput");
const weatherCard = document.querySelector("#weatherCard");
const cityName = document.querySelector("#cityName");
const countryName = document.querySelector("#countryName");
const weatherIcon = document.querySelector("#weatherIcon");
const weatherDesc = document.querySelector("#weatherDesc");
const temp = document.querySelector("#temp");
const humidity = document.querySelector("#humidity");
const error = document.querySelector("#error");
const previousSearches = document.querySelector("#previousSearches");

let cityWeatherData = {};

// The script begins by declaring constants for the API key, the form element, 
// the input element for the city, and various elements on the web page where the weather 
// data will be displayed. A variable cityWeatherData is initialized to an empty object.

//function to retrieve the weather data from API
const getCityWeather = async (city) => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      if (data.cod === 200) {
        return data;
      } else {
        throw new Error("City not found");
      }
    } catch (error) {
      console.log(error.message);
      return null;
    }
  };
  
  // The script then defines a function getCityWeather 
  // that retrieves weather data from the OpenWeatherMap API. This function takes a city parameter, 
  // which is the name of the city for which the weather data is being requested. It constructs a URL 
  // for the API using the city parameter and the apiKey constant. It then uses the fetch function to make an 
  // HTTP GET request to the URL, and awaits the response. If the response is successful 
  // (with a HTTP status code of 200), the JSON data from the response is returned. If the response is not 
  // successful, an error is thrown.



// Function to display weather data in card
const displayWeatherData = () => {
    cityName.textContent = cityWeatherData.name;
    countryName.textContent = cityWeatherData.sys.country;
    weatherIcon.src = `https://openweathermap.org/img/w/${cityWeatherData.weather[0].icon}.png`;
    weatherDesc.textContent = cityWeatherData.weather[0].description;
    temp.textContent = `Temperature: ${Math.round(cityWeatherData.main.temp - 273.15)}°C`;
    humidity.textContent = `Humidity: ${cityWeatherData.main.humidity}%`;
  };
  
  // displayWeatherData, takes no parameters. This function updates the various HTML elements on the 
  // web page with the weather data that was retrieved from the API. It first sets the textContent 
  // property of cityName and countryName elements to display the city name and country name of the 
  // weather data. It then sets the src attribute of the weatherIcon element to display the icon for 
  // the current weather condition. The textContent property of weatherDesc, temp, and humidity 
  // elements are then set to display the weather description, temperature, and humidity respectively.
  
  
  
  // Function to display error message
  const displayError = () => {
    error.classList.remove("hide");
    setTimeout(() => {
      error.classList.add("hide");
    }, 3000);
  };
  
  // The function displayError takes no parameters and is 
  // called when there is an error with the API request. This function displays an error message on 
  // the web page for a brief time period (3 seconds).
  
  
  // Function to save city weather data
  const saveCityWeatherData = () => {
    localStorage.setItem(cityWeatherData.name, JSON.stringify(cityWeatherData));
    const li = document.createElement("li");
    li.textContent = cityWeatherData.name;
    previousSearches.appendChild(li);
  };
  
  // The function saveCityWeatherData takes no parameters and is called when valid weather data is 
  // retrieved from the API. This function saves the cityWeatherData object to the local storage of the 
  // browser using the city name as the key and JSON.stringify() method to convert the data to a string. 
  // It also creates a new list item element, sets its text content to the city name, and appends it to 
  // the previousSearches element on the web page.
  
  
  
  
  // Event listener for form submission
  cityForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const city = cityInput.value.trim();
    if (city !== "") {
      cityInput.value = "";
      cityWeatherData = await getCityWeather(city);
      if (cityWeatherData) {
        displayWeatherData();
        saveCityWeatherData();
        weatherCard.classList.remove("hide");
      } else {
        displayError();
      }
    }
  });
  
  // An event listener is added to the cityForm element to listen for when the user submits the form 
  // (by pressing the submit button or hitting the enter key). When the form is submitted, the event listener 
  // prevents the default form submission behavior, retrieves the value of the cityInput element, and 
  // trims any leading or trailing whitespace from it. If the input value is not empty, the getCityWeather 
  // function is called with the city parameter, and the result is stored in the cityWeatherData object. 
  // If the cityWeatherData object is truthy, the displayWeatherData function is called to display the weather 
  // data, the saveCityWeatherData function is called to save the data to local storage, and the weatherCard 
  // element is displayed on the web page. If the cityWeatherData object is falsy, the displayError function 
  // is called to display an error message.


  // Function to load previous search data
const loadPreviousSearchData = () => {
    Object.keys(localStorage).forEach((key) => {
      const data = JSON.parse(localStorage.getItem(key));
      const li = document.createElement("li");
      li.textContent = key;
      previousSearches.appendChild(li);
    });
  };
  
  loadPreviousSearchData();