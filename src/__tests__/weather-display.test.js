import React from 'react';
import { WeatherDisplay } from '../weather-display';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
    const wrapper = shallow(<WeatherDisplay />)
    expect(wrapper).toHaveLength(1);
});

it('renders without crashing', () => {
    const wrapper = shallow(<WeatherDisplay />)
    expect(wrapper).toHaveLength(1);
});
