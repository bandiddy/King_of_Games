import React, { Component } from "react";
import "./Header.css";

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            
            <header className="jumbotron ">
            
                <img src="assets/kingofgames.png" className="king" height="120" width="100" alt="logo"></img>
                <h1 className="display-4 ">The King's Arcade</h1>
                <h3 className="lead">Reign over all players</h3>
              
            </header>
           
        )
    }
}
