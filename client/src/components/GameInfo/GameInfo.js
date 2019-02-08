import React from "react";
import "./GameInfo.css";

function GameInfo(props) {
    return (
        <div className="img-container">
            <img alt={props.name} src={props.image} />
        </div>
    )
};

export default GameInfo