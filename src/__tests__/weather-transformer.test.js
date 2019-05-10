import { transformOpenWeatherData, convertKelvinToCelcius } from '../weather-transformer';

describe('weather-transformer', () => {
    const openWeatherData = {
            "coord": {
            "lon": -0.13,
            "lat": 51.51
            },
            "weather": [
            {
            "id": 300,
            "main": "Drizzle",
            "description": "light intensity drizzle",
            "icon": "09d"
            }
            ],
            "base": "stations",
            "main": {
            "temp": 280.32,
            "pressure": 1012,
            "humidity": 81,
            "temp_min": 279.15,
            "temp_max": 281.15
            },
            "visibility": 10000,
            "wind": {
            "speed": 4.1,
            "deg": 80
            },
            "clouds": {
            "all": 90
            },
            "dt": 1485789600,
            "sys": {
            "type": 1,
            "id": 5091,
            "message": 0.0103,
            "country": "GB",
            "sunrise": 1485762037,
            "sunset": 1485794875
            },
            "id": 2643743,
            "name": "London",
            "cod": 200
    }

    it('gives us the data we expect', () => {
        expect(transformOpenWeatherData(openWeatherData)).toHaveProperty("city", "London")
        expect(transformOpenWeatherData(openWeatherData)).toHaveProperty("country", "GB")
        expect(transformOpenWeatherData(openWeatherData)).toHaveProperty("summary", "Drizzle")
        expect(transformOpenWeatherData(openWeatherData)).toHaveProperty("details", "light intensity drizzle")
        expect(transformOpenWeatherData(openWeatherData)).toHaveProperty("image", "09d")
        expect(transformOpenWeatherData(openWeatherData)).toHaveProperty("temperatureCurrent", "7.17")
        expect(transformOpenWeatherData(openWeatherData)).toHaveProperty("humidity", 81);
        expect(transformOpenWeatherData(openWeatherData)).toHaveProperty("temperatureMin", "6.00");
        expect(transformOpenWeatherData(openWeatherData)).toHaveProperty("temperatureMax", "8.00");
        })

    it('converts kelvin to celcius', () => {
        expect(convertKelvinToCelcius(280.32)).toEqual("7.17");
        expect(convertKelvinToCelcius(279.15)).toEqual("6.00");
        expect(convertKelvinToCelcius(281.15)).toEqual("8.00");
    })

})