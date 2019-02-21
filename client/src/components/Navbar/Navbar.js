import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default class Navbar extends React.Component {
  render() {
    return (
      <nav class="nav justify-content-center">
        <Link className="navbar-brand" to="/">
          Home
        </Link>
        <Link to="/breakout"
          className={
            window.location.pathname === "/breakout" ? 
            "nav-link active" : "nav-link"
          }>BREAKOUT
        </Link>
        <Link to="/snake"
          className={
            window.location.pathname === "/snake" ? 
            "nav-link active" : "nav-link"
          }>SNAKE
        </Link>
      
        <Link to="/racer"
          className={
            window.location.pathname === "/racer" ? 
            "nav-link active" : "nav-link"}>RACER
        </Link>
        <Link to="/topscore"
          className={
            window.location.pathname === "/kog" ?
            "nav-link active" : "nav-link"}>KING OF GAMES
        </Link>
      </nav>
    )
  }
}
