import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Signup from './components/Signup/Signup';
import Home from './components/Home/Home';
import Login from './components/Login/Login'
import axios from "axios";

export default class App extends Component {
    constructor(props) {
      super(props)
  
      this.handler = this.handler.bind(this)
    };
  
    handler() {
      this.setState({
        email:"",
        username:"",       
        password:""
      })
    }
  // handleSubmit = async event => {
  //   event.preventDefault();
  //   this.loginUser(this.state.username, this.state.password);
  // }

  loginUser(username, password) {
    axios.post("/api/users/login", {
      username: username,
      password: password
    }).then(function (data) {
      window.location.replace(data);
    }).catch(function (err) {
      console.log(err);
    });
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
              handleSubmit={this.handleSubmit}
              handler = {this.handler} />}
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
