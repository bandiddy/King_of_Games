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

          <hr/>

          <Route exact path="/" component={Login}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/home" component={Home}/>
        </div>
      </Router>
    );
  }
}
