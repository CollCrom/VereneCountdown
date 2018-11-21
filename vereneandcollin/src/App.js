import React, { Component } from 'react';
import Countdown from './Countdown'
import moment from 'moment-timezone';

const tz = moment.tz('Dec 26, 2018 12:50:00', 'America/Denver')
const dayToSeeVerene = new Date(tz).getTime()

class App extends Component {
  render() {
    return (
      <div className="App">
        <Countdown date={dayToSeeVerene}/>
      </div>
    );
  }
}

export default App;
