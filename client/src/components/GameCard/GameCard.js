import React from "react";
import "./GameCard.css";
import GameInfo from "../GameInfo";
// import TopScore from "./TopScore"


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

          </ul>

        </li> */}
        </li>
      </ul>
    </div>
  </div>
);

export default GameCard;
