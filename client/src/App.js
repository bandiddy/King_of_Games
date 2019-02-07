import React, { Component } from 'react';
import './App.css';
import Footer from './components/Footer/Footer'
import Header from './components/Header/header';

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