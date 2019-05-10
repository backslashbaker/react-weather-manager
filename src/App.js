import React from 'react';
import { WeatherDisplay } from './weather-display';
import { callOpenWeather } from './api-calls';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: null};
  }

  async componentWillMount() {
    const data = await callOpenWeather()
    this.setState({ data: data})
  }
  

  render() {
    if(this.state.data){
      return (
        <div className="App">
        <WeatherDisplay data={this.state.data} />
        </div>
      ); 
    } else {
      return "Loading"
    }
  
}

}

export default App;
