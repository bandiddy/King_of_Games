import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/">
      Pupster
    </Link>
    <div>
      <ul className="navbar-nav">
        <li className="nav-item">
        <Link className="navbar-brand" to="/">
      Pupster
    </Link>
        </li>
        <li className="nav-item">
        <Link className="navbar-brand" to="/">
      Pupster
    </Link>
        </li>
        <li className="nav-item">
        <Link className="navbar-brand" to="/">
      Pupster
    </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
