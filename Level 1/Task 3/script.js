// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

// Function to convert Celsius to Kelvin
function celsiusToKelvin(celsius) {
  return celsius + 273.15;
}

// Function to convert Kelvin to Celsius
function kelvinToCelsius(kelvin) {
  return kelvin - 273.15;
}

// Function to convert Fahrenheit to Kelvin
function fahrenheitToKelvin(fahrenheit) {
  return ((fahrenheit + 459.67) * 5) / 9;
}

// Function to convert Kelvin to Fahrenheit
function kelvinToFahrenheit(kelvin) {
  return (kelvin * 9) / 5 - 459.67;
}

// Function to validate the input temperature
function validateTemperature(temperature) {
  return !isNaN(temperature);
}

// Function to handle the conversion
function convertTemperature() {
  var temperatureInput = document.getElementById("temperature").value;
  var unitInput = document.getElementById("unit").value;
  var resultElement = document.getElementById("result");

  if (!validateTemperature(temperatureInput)) {
    resultElement.textContent = "Invalid temperature!";
    return;
  }

  var temperature = parseFloat(temperatureInput);
  var convertedTemperature;
  var convertedUnit;

  if (unitInput === "celsius") {
    convertedTemperature = celsiusToFahrenheit(temperature);
    convertedUnit = "°F";
  } else if (unitInput === "fahrenheit") {
    convertedTemperature = fahrenheitToCelsius(temperature);
    convertedUnit = "°C";
  } else if (unitInput === "kelvin") {
    convertedTemperature = kelvinToCelsius(temperature);
    convertedUnit = "°C";
  }

  resultElement.textContent =
    convertedTemperature.toFixed(2) + " " + convertedUnit;
}

// Add event listener to the convert button
document
  .getElementById("convert")
  .addEventListener("click", convertTemperature);
