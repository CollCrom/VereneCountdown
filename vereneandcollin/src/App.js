import React, { Component } from 'react';
import Countdown from './Countdown'


const dayToSeeVerene = new Date('Nov 16, 2018 18:46:00').getTime()

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
