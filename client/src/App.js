import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import games from "./games.json";
import Wrapper from "./components/Wrapper/Wrapper";
import GameCard from './components/GameCard/GameCard';
import TopScoreCard from "./components/TopScoreCard/TopScoreCard";
import Snake from "./components/Snake/Snake";
import Breakout from "./components/Breakout/Breakout";
//import Tower from "./components/Towerdefense/Towerdefense";
import Racer from "./components/Racer";
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Modal from './components/Modal/Modal';;

export default class App extends Component {
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
          <Route
            path='/breakout'
            name="Breakout"
            render={(props) => <Breakout />}
          />
          <Route
            path='/snake'
            name="Snake"
            render={(props) => <Snake />}
          />
          <Route
            path='/racer'
            name="Racer"
            render={(props) => <Racer />}
          />
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
