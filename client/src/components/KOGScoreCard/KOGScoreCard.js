import React from "react";
import "./KOGScoreCard.css";
import KOGScore from "../KOGScore/KOGScore"

export default class KOGScoreCard extends React.Component {
    render() {
        return(
            <div className="TScard">
                <KOGScore handler = {this.handler} score={this.props.score}/>
            </div>
        )
    }
}
  
