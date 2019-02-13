import React from "react";
import "./TopScoreCard.css";
import TopScore from "../TopScore/TopScore"

export default class TopScoreCard extends React.Component {
    render() {
        return(
            <div className="TScard">
                <TopScore username={this.props.username} score={this.props.score}/>
            </div>
        )
    }
}
  
