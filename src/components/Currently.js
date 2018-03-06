import React, { Component } from 'react';
import {URL} from './constants';
import Data from './data';

export class Currently extends Component {
  constructor(props) {
    super(props);
  }


  async componentDidMount() {
    console.log('component mounted');
    await this.setState({
      currently: this.props.currently,
    });
    }

  render() {
    let block = null;
    if (Object.keys(this.props.data).length > 0) {
      let time = Data.parseTimeStamp(this.props.data.time);
      block = <div>
        <p>{time.day} / {time.date}</p>
        <div>{this.props.data.icon}</div>
        <div>Summary: {this.props.data.summary}</div>
      </div>;
    } else {
      block = 'Loading…';
    }

    return (
      <div>
        <h2>Currently:</h2>
        {block}
      </div>
    );
  }
}