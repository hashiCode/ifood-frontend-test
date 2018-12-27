import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import FeaturedPlaylist from './components/FeaturedPlaylist'
import Login from './components/Login'
import queryString from 'query-string'
import localStorageService from './services/LocalStorageService'

class App extends Component {

  render() {
    //TODO learn some route framework
    const hash = window.location.hash;
    let queryParam=queryString.parse(hash);
    let component= <Login />;
    if(queryParam.access_token){
      localStorageService.storeToken(queryParam.access_token);
      component=<FeaturedPlaylist />;
    }

    return (
        component
    );
  }
}

export default App;
