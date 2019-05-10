import React from 'react';
import logo from './logo.svg';
import { WeatherDisplay } from './weather-display';
import './App.css';

function App() {
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
  return (
    <div className="App">
    <WeatherDisplay data={data} />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
