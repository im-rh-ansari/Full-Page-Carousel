import React, { Component } from 'react';
import Navbar from './components/navbarComponent';
import Carousel from './components/carouselComponent';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Carousel />
      </div>
    );
  }
}

export default App;



