import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Signup from './components/Signup/Signup';
import Home from './components/Home/Home';
import Login from './components/Login/Login'

export default class App extends Component {
    constructor(props) {
      super(props)
  
      this.state = {
        email:"",
        username:"",       
        password:""
      }
    }
  

  onChange(field, value) {
    this.setState({[field]: value});
  }

  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
            <li><Link to="/home">Home</Link></li>
          </ul>


          <Route exact path="/" 
            render={(props) => <Login
              onChange={this.onChange.bind(this)}
              email={this.state.email}
              username={this.state.username}
              password={this.state.password} />}
          />
          <Route path="/signup" component={Signup} />
          <Route
            path='/home'

            render={(props) => <Home
              handler = {this.handler} />}
          />
        </div>
      </Router>
    );
  }
}