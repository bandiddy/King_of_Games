import React from "react";
import "./score.css";

function Score(props) {
    return (
        <div className="Scores">
            <ol>
                <li>{props.scores} {props.username} {props.id}</li>
            </ol>
        </div>

    );
};
export default Score;