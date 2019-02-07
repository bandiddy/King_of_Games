import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header';
import Footer from './components/Footer/Footer';
// import Navbar from './components/Navbar/Navbar'

class App extends Component {
 render() {
   return (
     <div>
<Header />
{/* <Navbar /> */}
<Footer />
    </div>

   );
   
 }
}

export default App;