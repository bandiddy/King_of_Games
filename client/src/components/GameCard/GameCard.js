import React from "react";
import "./GameCard.css";
import GameInfo from "../GameInfo";
import TopScore from "../TopScore";

const GameCard = () => (
    <div className="GameTopScore">
        <div className="GamePic">
            <GameInfo />      
        </div>
        <div className="TopScore">
            <TopScore />
        </div>
    </div>
);
export default GameCard;