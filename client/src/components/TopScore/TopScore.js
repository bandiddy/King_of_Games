import React from "react";
import "./TopScore.css";
import Score from "../Score"


const TopScore = (props) => (
    <div className="TopScores">
    <h1>Top Scores:</h1>
        <Score score={props.score} username={props.username} id={props.id}/>
    </div>
);

export default TopScore;