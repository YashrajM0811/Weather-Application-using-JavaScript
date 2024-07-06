# Weather Application using JavaScript

This project demonstrates the implementation of core JavaScript concepts by creating a Weather Application. The application fetches real-time weather data for any city using the OpenWeatherMap API and displays the information to the user.

## Introduction

The Weather Application is a simple project that fetches and displays weather data for a user-specified city. It helps in understanding key JavaScript concepts such as event handling, API fetching, DOM manipulation, and working with JSON data.

## Getting Started

To get started with this project, clone the repository or download the files. Open the `index.html` file in your browser to see the Weather Application in action.

## Files Included

- `index.html`: Contains the structure of the application.
- `style.css`: Contains the styles for the application.
- `script.js`: Contains the JavaScript code to make the application functional.

## HTML Structure

The `index.html` file defines the structure of the Weather Application.

## CSS Styling

The `style.css` file is used to style the application. Customize the appearance of the Weather Application by modifying this file.

## JavaScript Functionality

The `script.js` file contains the JavaScript code that makes the application functional. 

### Explanation of the JavaScript Code

1. Selecting Elements: The variables `input`, `btn`, `icon`, `weather`, `description`, and `temperature` are used to reference the respective elements in the HTML.
2. API Key: The `apiKey` variable stores the API key required to access the OpenWeatherMap API.
3. Event Listener: An event listener is added to the button to handle the click event, triggering the `getWeather` function.
4. Fetching Weather Data: The `getWeather` function fetches weather data for the specified city using the OpenWeatherMap API.
5. Displaying Weather Data: The fetched data is then displayed in the respective elements:
   - Weather Icon: Displays the weather icon based on the fetched icon code.
   - City and Country: Displays the name of the city and country.
   - Temperature: Converts the temperature from Kelvin to Celsius and displays it.
   - Description: Displays a capitalized version of the weather description.

## How to Use

1. Open the `index.html` file in your web browser.
2. Enter the name of a city in the input field.
3. Click the "Get Weather" button.
4. The weather data for the specified city will be displayed.

## Conclusion

This Weather Application is a simple project that demonstrates the power of JavaScript in creating interactive web applications. By understanding and modifying this project, you can learn essential JavaScript concepts and improve your web development skills.