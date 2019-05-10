import React from 'react';
import { WeatherDisplay } from '../weather-display';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const data = {
    "city": "London",
    "country": "GB",
    "summary": "Drizzle",
    "details": "light intensity drizzle",
    "image": "http://openweathermap.org/img/w/09d.png",
    "temperatureCurrent": "7.17",
    "humidity": 81,
    "temperatureMin": "6.00",
    "temperatureMax": "8.00"
}

it('renders without crashing', () => {
    const wrapper = shallow(<WeatherDisplay data={data} />)
    expect(wrapper).toHaveLength(1);
});

it('displays the city', () => {
    const wrapper = shallow(<WeatherDisplay data={data} />)
        expect(wrapper.find('#city').text()).toContain("London");
});

it('displays the country', () => {
    const wrapper = shallow(<WeatherDisplay data={data} />)
        expect(wrapper.find('#country').text()).toContain("GB");
});

//TODO Write the rest of these tests
// TODO also - figure out how to test the image!