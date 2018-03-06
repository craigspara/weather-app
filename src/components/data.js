import React, { Component } from 'react';
import {URL} from './constants.js';

// console.log(URL);
// this.moonPhase =  this.data.daily.data[0].moonPhase;
// let date =  data.daily.data[0].time;
// let unixDate = Math.round(date) * 1000;
// let dataDate = new Date(unixDate);
// console.log(this.moonPhase);
// console.log(date);
// console.log(unixDate);
// console.log(dataDate);

class Data extends Component {
  constructor(data) {
    super();
    this.state = {
      currently: data.currently,
      hourly: data.hourly,
      daily: data.daily
    }
  }



  static parseTimeStamp(time) {
    const dayOptions = { weekday: 'long' };
    const dateOptions = { month: 'long', day: 'numeric' };

    const unixTime = new Date(Math.round(time) * 1000);
    const weekday = unixTime.toLocaleDateString('en-US', dayOptions);
    const date = unixTime.toLocaleDateString('en-US', dateOptions);
    return {

      day: weekday,
      date: date
    };
    // Unix time

  }
  render() {
    console.log(this.state);
    return (
      <div>Data
        {/*{this.props.render(this.state)}*/}
      </div>
    )
  }

}

export default Data;