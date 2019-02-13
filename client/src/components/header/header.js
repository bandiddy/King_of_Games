import React, { Component } from "react";
import "./Header.css";

<<<<<<< HEAD
const Header = (props) => (
    <header class="jumbotron ">
        <img src="assets/kingofgames.png" className="king" height="120" width="100" alt={props}></img>
        <h1 class="display-4 ">The King's Arcade</h1>
        <h3 class="lead">Reign over all players</h3>
    
    </header>
);
=======
export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }
>>>>>>> 9cb86a88695aaaf48be96190b5b0f5c83778a690

    render() {
        return (
            <header class="jumbotron ">
                <img src="assets/kingofgames.png" className="king" height="120" width="100" alt="logo"></img>
                <h1 class="display-4 ">The King's Arcade</h1>
                <h3 class="lead">Reign over all players</h3>
            </header>
        )
    }
}
