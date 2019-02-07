import React from "react";
import "./portal.css";

const Portal = () => (
    <div className="game">
        <a href="specificgame">
        <img src="gamepic" alt="gamedesc" />
        </a>
        <p>Top Scores for Game</p>
        <ol>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
        </ol>
    </div>
);

export default Portal