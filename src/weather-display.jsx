import React from 'react';


export class WeatherDisplay extends React.Component {

    render() {
        const { data } = this.props;
    return <table>
        <tbody>
        <tr>
            <th>City</th>
            <th>Country</th> 
            <th>Image</th>   
        </tr>
        <tr>
            <td id='city'>{ data.city }</td>
            <td id='country'>{ data.country}</td> 
            <td><img src={ data.image } /></td>
        </tr>
        <tr>
            <th>Summary</th>
            <th>Details</th> 
            <th>Temperature</th>   
        </tr>
        <tr>
            <td>{ data.summary }</td>
            <td>{ data.details }</td> 
            <td>{ data.temperatureCurrent }&deg;C</td>
        </tr>
        <tr>
            <th>Humidity</th>
            <th>Minimum</th> 
            <th>Maximum</th>   
        </tr>
        <tr>
            <td>{ data.humidity }%</td>
            <td>{ data.temperatureMin }&deg;C</td> 
            <td>{ data.temperatureMax }&deg;C</td>
        </tr>
        </tbody>
    </table>
    }
  }
