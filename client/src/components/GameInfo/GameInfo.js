import React from "react";
import "./GameInfo.css";

function GameInfo(props) {
    return (

        <div className="GameInfo">
            <img className="gamelink"
                a={props.game.link}
                src={props.game.src}
                alt={props.game.alt}
            />
        </div>
    )
};
export default GameInfo