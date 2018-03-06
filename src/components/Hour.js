import React, { Component } from 'react';

export class Hour extends React.PureComponent {

  render() {
    let hour = this.props.data;

    return (
      <div>
        <p>{hour.time}</p>
        <div>{hour.icon}</div>
        <div>{hour.precipType}</div>
        <div>{hour.temperature}</div>
      </div>
    );
  }
}

// "time": 1509991200,
//   "summary": "Mostly Cloudy",
//   "icon": "partly-cloudy-day",
//   "precipIntensity": 0.0007,
//   "precipProbability": 0.1,
//   "precipType": "rain",
//   "temperature": 65.76,
//   "apparentTemperature": 66.01,
//   "dewPoint": 60.99,
//   "humidity": 0.85,
//   "pressure": 1010.57,
//   "windSpeed": 4.23,
//   "windGust": 9.52,
//   "windBearing": 230,
//   "cloudCover": 0.62,
//   "uvIndex": 1,
//   "visibility": 9.32,
//   "ozone": 268.95