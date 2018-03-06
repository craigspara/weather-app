import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Data from './components/data.js';
import {URL} from './components/constants.js';
import {Currently} from './components/Currently';
import {Hourly} from './components/Hourly.js';
import {Daily} from './components/Daily.js';
import {Weather} from './components/Weather';
import {MoonPhases} from './components/moon-phases';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currently: {},
      hourly: {},
      daily: {}
    };
  }

  async getRawData(url)  {
    let response = await fetch(url);
    return await response.json();
  };

  async componentDidMount() {

    let data = await this.getRawData(URL);
    console.log(URL);
    this.setState({
      currently: data.currently,
      hourly: data.hourly,
      daily: data.daily
    });
  }

  render() {
    // console.log(this.state.currently.length);

    // while (this.state.currently.length === undefined) {
    //   if (currently) {
    //     console.log(currently);
    //     currently = <Currently currently={currently}/>;
    //   }
    //   else {
    //     currently = <div>Loading...</div>;
    //   }
    // }



    return (
      <div className="App" >

        {/*<Currently data={this.state.currently} />*/}
        {/*<Hourly data={this.state.hourly} />*/}
        <Daily data={this.state.daily} />
      </div>
    );
  }
}

export default App;
