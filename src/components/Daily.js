import React, { Component } from 'react';
import {Day} from './Day';

export class Daily extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let block = null;
    if (Object.keys(this.props.data).length > 0) {
      block = Object.values(this.props.data.data).map((prop) =>  {
        // console.log(day);
      return <Day key={prop.time.toString()} data={prop}/>
    });
      // block = this.props.data.summary;
    } else {
      block = 'Loading…';
    }

    return (
      <div>
        <div className='grid__evenly-distributed'>{block}</div>
      </div>
    );
  }
}