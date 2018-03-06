import React, { Component } from 'react';
import {MoonPhases} from './moon-phases';
import Data from './data';

export class Day extends React.PureComponent {

  render() {
    const {time, moonPhase} = this.props.data;
    const parsedTime = Data.parseTimeStamp(time);

    console.log(parsedTime);
    return (
      <article className='grid__module'>
        <header>
          <p>{parsedTime.day}</p>
          <p>{parsedTime.date}</p>
        </header>
        <h4>MoonPhase</h4>
        <MoonPhases data={{'moonPhase': moonPhase}}/>
      </article>
    );
  }
}