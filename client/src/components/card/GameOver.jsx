import React from 'react';

const GameOver = ({ restartGame }) => (
    <div className="justify-center">
    <h1>GameOver!</h1>
    <h3>Thanks for playing!</h3>
    <button className="restart-button" onClick={restartGame}>Play Again?</button>
    </div>
);

export default GameOver;