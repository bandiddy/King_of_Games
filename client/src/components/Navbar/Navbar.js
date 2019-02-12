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
<<<<<<< HEAD
        to="/breakout"
        className={
          window.location.pathname === "/breakout" ? "nav-link active" : "nav-link"
        }
      >
       BREAKOUT
=======
      to="/breakout"
      className={
        window.location.pathname === "/asteroids" ? "nav-link active" : "nav-link"
      }
    >
      BREAKOUT
>>>>>>> 450552c1e6a9019f734ea916c12e7c7c92cbdfc0
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
      to="/racecar"
      className={
        window.location.pathname === "/racecar"
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
