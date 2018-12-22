import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FeaturedPlaylist from './components/FeaturedPlaylist'

class App extends Component {

  render() {
    return (
      <div>
        <FeaturedPlaylist />
      </div>
    );
  }
}

export default App;
