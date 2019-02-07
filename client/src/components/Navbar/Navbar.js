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
      to="/"
      className={
        window.location.pathname === "/" || window.location.pathname === "/asteroids"
          ? "nav-link active"
          : "nav-link"
      }
    >
      ASTEROIDS
          </Link>
          <Link
      to="/"
      className={
        window.location.pathname === "/" || window.location.pathname === "/snake"
          ? "nav-link active"
          : "nav-link"
      }
    >
      SNAKE
          </Link>
          <Link
      to="/"
      className={
        window.location.pathname === "/" || window.location.pathname === "/towerdefense"
          ? "nav-link active"
          : "nav-link"
      }
    >
      TOWER DEFENSE
          </Link>
          <Link
      to="/"
      className={
        window.location.pathname === "/" || window.location.pathname === "/racecar"
          ? "nav-link active"
          : "nav-link"
      }
    >
      RACE CAR
          </Link>
          <Link
      to="/"
      className={
        window.location.pathname === "/" || window.location.pathname === "/topscore"
          ? "nav-link active"
          : "nav-link"
      }
    >
      TOP SCORE
          </Link>


  </nav>
);

export default Navbar;
