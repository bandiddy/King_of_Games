import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/header';
import Footer from './components/Footer/Footer'

class App extends Component {
  render() {
    return (
        <div>
          <Header />
          <Footer />
        </div>
        
    );
  }
}

export default App;
