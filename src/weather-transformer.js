export function transformOpenWeatherData(openWeatherData) {
    return {
        "city": openWeatherData.name,
        "country": openWeatherData.sys.country,
        "summary": openWeatherData.weather[0].main,
        "details": openWeatherData.weather[0].description,
        "image": getImageUrl(openWeatherData.weather[0].icon),
        "temperatureCurrent": convertKelvinToCelcius(openWeatherData.main.temp),
        "humidity": openWeatherData.main.humidity,
        "temperatureMin": convertKelvinToCelcius(openWeatherData.main.temp_min),
        "temperatureMax": convertKelvinToCelcius(openWeatherData.main.temp_max)
        
    }
}

export function convertKelvinToCelcius(kelvin) {
    const kelvinDifference = 273.15
    const converted = kelvin - kelvinDifference;

    return converted.toFixed(2)
}

export function getImageUrl(icon){
    return `http://openweathermap.org/img/w/${icon}.png`
}