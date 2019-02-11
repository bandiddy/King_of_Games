import React from "react";
import "./GameCard.css";
import GameInfo from "../GameInfo";
import TopScore from "../TopScore"

const GameCard = props => (
  <div className="card">
    <GameInfo name={props.name} image={props.image} />
    <div className="content">
      <ul>
        <li>
          <strong>Game:</strong> {props.name}
        </li>
        <TopScore score={props.score} />
      </ul>
    </div>
  </div>
);

export default GameCard;
