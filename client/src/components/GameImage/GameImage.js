import React, { Component } from 'react';
import "./GameImage.css";
// import games from "./games.json";

export default class GameImage extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="img-container">
                <img alt={this.props.name} src={this.props.image} />
            </div>
        )
    }
}
