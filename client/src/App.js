import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import GameCard from './components/GameCard/GameCard'
import Navbar from './components/Navbar/Navbar'
import games from "./games.json";
import Wrapper from "./components/Wrapper/Wrapper"
import { BrowserRouter as Router, Route } from "react-router-dom";
import Snake from "./components/Pages/snake"
import Breakout from "./components/Pages/breakout"
import Tower from "./components/Pages/towerdefense"
import Racecar from "./components/Pages/racecar"
// import Topscore from "./components/Pages/topscore"
// import GameInfo from "./components/GameInfo"
import TopScoreCArd from "./components/TopScoreCard"
// import Login from "./components/Login"
import Modal from "./components/Modal/Modal"

class App extends Component {

  state = {
    games
  };
 render() {
   return (

    <Router>
     <div>
     <Modal />   
<Header />
<Navbar />

<Route exact path="/" />
<Route
  path='/breakout'
  name="Breakout"
  render={(props) => <Breakout/>}
/>
<Route
  path='/snake'
  name="Snake"
  render={(props) => <Snake/>}
/>

<Wrapper>

<TopScoreCArd />
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