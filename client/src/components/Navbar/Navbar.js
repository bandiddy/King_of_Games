import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = () => (
  <nav class="nav justify-content-center">
    <Link className="navbar-brand" to="/">
      Home
    </Link>
    <Link
        to="/breakout"
        className={
          window.location.pathname === "/breakout" ? "nav-link active" : "nav-link"
        }
      >
       BREAKOUT
      </Link>
    <Link
      to="/snake"
      className={
        window.location.pathname === "/snake"
          ? "nav-link active"
          : "nav-link"
      }
    >
      SNAKE
          </Link>
    <Link
      to="/towerdefense"
      className={
        window.location.pathname === "/towerdefense"
          ? "nav-link active"
          : "nav-link"
      }
    >
      TOWER DEFENSE
          </Link>
          <Link
      to="/racer"
      className={
        window.location.pathname === "/racer" 
          ? "nav-link active"
          : "nav-link"
      }
    >
      RACER
          </Link>
    <Link
      to="/topscore"
      className={
        window.location.pathname === "/topscore"
          ? "nav-link active"
          : "nav-link"
      }
    >
      TOP SCORE
          </Link>


  </nav>
);

export default Navbar;
