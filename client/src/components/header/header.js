import React, { Component } from "react";
import "./Header.css";

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

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
