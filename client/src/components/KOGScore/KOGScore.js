import React, { Component } from 'react';
import "./KOGScore.css";
import Score from "../Score"


export default class KOGScore extends React.Component {
    render() {
        return(
            <div className="KOGScores">
                <h1>THE KING OF GAMES:</h1>
                <Score handler={this.handler} score={this.props.score} />
            </div>
        )
    }
}

