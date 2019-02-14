import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Signup from './components/Signup/Signup';
import Home from './components/Home/Home';
import Login from './components/Login/Login'

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
          <ul>
            <li><Link to="/">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
            <li><Link to="/home">Home</Link></li>
          </ul>

<<<<<<< HEAD
          <hr/>

          <Route exact path="/" component={Login}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/home" component={Home}/>
=======
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
>>>>>>> e8a21fa9ea62dd14ab4e7b02a61178f5d3fffbcf
        </div>
      </Router>
    );
  }
}
