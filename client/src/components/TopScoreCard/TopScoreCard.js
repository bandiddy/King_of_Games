import React from "react";
import "./TopScoreCard.css";
<<<<<<< HEAD
import TopScore from "../TopScore"

const TopScoreCard = (props) => (
    <div className="TScard">
       <TopScore score={props.score} username={props.username} id={props.id}/>
    </div>
  );
  
  export default TopScoreCard;
=======
import TopScore from "../TopScore/TopScore"

export default class TopScoreCard extends React.Component {
    render() {
        return(
            <div className="TScard">
                <TopScore/>
            </div>
        )
    }
}
  
>>>>>>> jc
