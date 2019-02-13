import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './Home.css';
import games from "./games.json";
import Wrapper from "../Wrapper/Wrapper";
import GameCard from '../GameCard/GameCard';
import TopScoreCard from "../TopScoreCard/TopScoreCard";
import Snake from "../Snake/Snake";
import Breakout from "../Breakout/Breakout";
//import Tower from "./components/Towerdefense/Towerdefense";
import Racer from "../Racer";
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Modal from '../Modal/Modal';;

export default class Home extends Component {
  
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
