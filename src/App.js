import React from 'react';
import { WeatherDisplay } from './weather-display';
import { callOpenWeather } from './api-calls';
import './App.css';
import { CitySelector } from './city-selector';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: null, city: null };

    }

    async componentWillMount() {
        const data = await callOpenWeather('London')
        this.setState({ data: data })
    }
    submitCity = async(city) => {
        await this.setState({ city: city })
        const data = await callOpenWeather(city)
        this.setState({ data: data })
    }

    render() {
        console.log(this.state)
        if (this.state.data) {
            return ( <
                div className = "App" >
                <
                WeatherDisplay data = { this.state.data }
                /> <
                CitySelector submitCity = { this.submitCity }
                /> < /
                div >
            );
        } else {
            return "Loading"
        }

    }

}

export default App;