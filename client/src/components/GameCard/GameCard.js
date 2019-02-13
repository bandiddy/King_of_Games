import React, { Component } from 'react';
import "./GameCard.css";
import GameImage from "../GameImage";
import Score from "../Score"


<<<<<<< HEAD
const GameCard = props => (
  <div className="card">
    <GameInfo name={props.name} image={props.image} />
    <div className="content">
      <ul>
        <li>
          <strong> {props.name}</strong>
        </li>
        <li>
          {/* <TopScore name = {props.name} score ={props.score} /> */}
          {/* <strong>Top Score:</strong>
        </li>
        <li>
          <ul>
            <li>1:</li><strong></strong>
            <li>2:</li><strong></strong>
            <li>3:</li><strong></strong>
            <li>4:</li><strong></strong>
=======
export default class GameCard extends React.Component {
  constructor(props) {
    super(props);
  }
>>>>>>> 9cb86a88695aaaf48be96190b5b0f5c83778a690

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
