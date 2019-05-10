import { callOpenWeather } from '../api-calls';
import { transformOpenWeatherData } from '../weather-transformer';

describe('api-call', () => {

    beforeEach(() => {
        fetch = jest.fn()
    })

    it('converts i', () => {
        callOpenWeather()
        expect(fetch).toHaveBeenCalledWith(`http://api.openweathermap.org/data/2.5/weather?q=London&APPID=${process.env.REACT_APP_API_KEY}`);
    })
    
})