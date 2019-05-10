import { transformOpenWeatherData } from './weather-transformer';


const key = process.env.REACT_APP_API_KEY
const url = `http://api.openweathermap.org/data/2.5/weather?q=London&APPID=${key}`


export async function callOpenWeather() {
    const apiCall = await fetch(url);
    const response = await apiCall.json();

return transformOpenWeatherData(response)

}

