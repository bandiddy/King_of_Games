import React, { Component } from 'react';
import "./TopScore.css";
import Score from "../Score"


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

