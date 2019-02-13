import React from "react";
import "./TopScoreCard.css";
import TopScore from "../TopScore"

const TopScoreCard = (props) => (
    <div className="TScard">
       <TopScore score={props.score} username={props.username} id={props.id}/>
    </div>
  );
  
  export default TopScoreCard;