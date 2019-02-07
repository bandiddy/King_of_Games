import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header';
import Footer from './components/Footer/Footer';
// import Container from './components/Container/container'
import GameCard from './components/GameCard/GameCard'
import Navbar from './components/Navbar/Navbar'
import games from "./games.json";
import Wrapper from "./components/Wrapper/Wrapper"
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {

  state = {
    games
  };
 render() {
   return (
    <Router>
     <div>
<Header />
<Navbar />
<Route exact path="/" />
<Route exact path="/asteroids" />
<Route exact path="/snake" />
<Route exact path="/towerdefense" />
<Route exact path="/racecar" />
<Route exact path="/topscore" />


<Wrapper>
{this.state.games.map(game => (
  <GameCard
    
    id={game.id}
    key={game.id}
    name={game.name}
    image={game.image}
    
  />
))}
</Wrapper>
<Footer />
    </div>
</Router>
   );
   
 }
}

export default App;