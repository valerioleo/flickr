import React, { Component } from 'react';
import './App.css';

import LandingPage from 'views/LandingPage'

class App extends Component {
  componendDidMount () {
    this.props.fetchPhotos()
  }
  render() {
    return (
      <div className="App">
        <LandingPage />
      </div>
    );
  }
}

export default App;
