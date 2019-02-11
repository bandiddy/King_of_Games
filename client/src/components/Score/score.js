import React from "react";
import "./score.css";

function Score(props) {
    return (
        <div className="Scores">
            <ol>
                <li>{props.game.scores}</li>
            </ol>
        </div>

    );
};
export default Score;