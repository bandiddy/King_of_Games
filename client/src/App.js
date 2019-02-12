import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header';
import Footer from './components/Footer/Footer';
import Modal from './components/Modal/Modal'
import GameCard from './components/GameCard/GameCard'
import Navbar from './components/Navbar/Navbar'
import games from "./games.json";
import Wrapper from "./components/Wrapper/Wrapper"
import { BrowserRouter as Router, Route } from "react-router-dom";
import Snake from "./components/Snake/Snake"
import Breakout from "./components/Pages/breakout"
import Tower from "./components/Pages/towerdefense"
import Racer from "./components/Racer"
import Topscore from "./components/TopScore/TopScore"
// import GameInfo from "./components/GameInfo"
import TopScoreCard from "./components/TopScoreCard/TopScoreCard"

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
<Route exact path="/breakout"  component={Breakout} />
{/* <Route exact path="/" component={Login}/> */}
<Route exact path="/snake" component={Snake}/>
<Route exact path="/towerdefense" component={Tower}/>
<Route exact path="/racer" component={Racer}/>
<Route exact path="/topscore" component={Topscore}/>


<Wrapper>

<TopScoreCard />
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