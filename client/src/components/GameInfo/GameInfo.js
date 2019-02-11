import React from "react";
import "./GameInfo.css";
// import games from "./games.json";

function GameInfo(props) {
    return (
        <div className="img-container">
            <img alt={props.name} src={props.image} />
        </div>
    )
};
export default GameInfo