import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login'
import {withRouter} from 'react-router';

export default class App extends Component {
  constructor(props) {
    super(props);
  this.state = {
    username: "",
    email: "",
    password: ""
  };
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
            username = {this.state.username}
            name="Breakout"
            render={(props) => <Breakout />}
          />
          <Route
            path='/snake'
            username = {this.state.username}
            name="Snake"
            render={(props) => <Snake />}
          />
          <Route
            path='/racer'
            username = {this.state.username}
            name="Racer"
            render={(props) => <Racer />}
          />
          <Wrapper>
            <TopScoreCard/>
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
