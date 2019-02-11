import React from "react";
import "./GameCard.css";
import GameInfo from "../GameInfo"

const GameCard = props => (
  <div className="card">
  <GameInfo />
    {/* <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div> */}
    <div className="content">
      <ul>
        <li>
          <strong>Game:</strong> {props.name}
        </li>
        <li>
          <strong>Top Score:</strong> 
        </li>
        <li>
          <ul>
            <li>1:</li><strong></strong> 
            <li>2:</li><strong></strong> 
            <li>3:</li><strong></strong> 
            <li>4:</li><strong></strong> 

          </ul>
          
        </li>
      </ul>
    </div>
  </div>
);

export default GameCard;
