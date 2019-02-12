import React from "react";
import "./Header.css";

const Header = (props) => (
    <header class="jumbotron ">
        <img src="./images/kingofgames.png" className="king" height="120" width="100" alt={props}></img>
        <h1 class="display-4 ">The King's Arcade</h1>
        <h3 class="lead">Reign over all players</h3>
    
    </header>
);

export default Header;