import { transformOpenWeatherData } from './weather-transformer';


const key = process.env.REACT_APP_API_KEY


export async function callOpenWeather(city) {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${key}`
    const apiCall = await fetch(url);
    const response = await apiCall.json();

    return transformOpenWeatherData(response)

}