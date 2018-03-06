import React, { Component } from 'react';
import {Hour} from './Hour.js';

export class Hourly extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let block = null;
    if (Object.keys(this.props.data).length > 0) {
      block = Object.values(this.props.data.data).map((Hour) =>  <Hour key={Hour.time.toString()} data={Hour}/>
    );
      // block = this.props.data.summary;
    } else {
      block = 'Loading…';
    }

    return (
      <div>
        <h2>Hourly</h2>
        <div>{block}</div>
      </div>
    );
  }
}