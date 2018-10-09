import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSyncAlt, faCheck, faTimes, faStar } from '@fortawesome/free-solid-svg-icons';
import Game from "./components/Game";
import './App.css';
library.add(faSyncAlt, faCheck, faStar, faTimes);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Game/>
      </div>
    );
  }
}

export default App;
