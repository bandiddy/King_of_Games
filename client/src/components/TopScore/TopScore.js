import React, { Component } from 'react';
import "./TopScore.css";
import Score from "../Score"


<<<<<<< HEAD
const TopScore = (props) => (
    <div className="TopScores">
    <h1>Top Scores:</h1>
        <Score score={props.score} username={props.username} id={props.id}/>
    </div>
);
=======
export default class TopScore extends React.Component {
    render() {
        return(
            <div className="TopScores">
                <h1>Top Scores:</h1>
                <Score/>
            </div>
        )
    }
}
>>>>>>> jc

