import React, { Component } from "react";
import * as Phaser from "phaser";
import Game from "../components/breakout";

class GameContainer extends Component {
  state = {
    lives: 3
  };

  componentDidMount() {
    let gameConfig = {
      type: Phaser.CANVAS,
      width: 800,
      height: 600,
      parent: "gameContainer",
      disableContextMenu: true,
      physics: {
        default: "arcade",
        arcade: {
          gravity: { y: 200 },
          debug: true
        }
      },
      scene: [Game]
    };

    this.game = new Phaser.Game(gameConfig);
  }

  render() {
    return <div id="render-game" />;
  }
}

export default GameContainer;
