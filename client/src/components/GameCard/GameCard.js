import React, { Component } from 'react';
import "./GameCard.css";
import GameImage from "../GameImage";
import Score from "../Score"


export default class GameCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="card">
        <GameImage name={this.props.name} image={this.props.image} />
        <div className="content">
            <h2>Game: {this.props.name}</h2>
            <Score/>
        </div>
      </div>
    )
  }
}
