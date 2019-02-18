import React, { Component } from 'react';
import API from "../../utils/API";
import 'pixi';
import 'p2';
import Phaser from 'phaser';


var score = 0;
var lives = 3;

var hitBrick = function (ball, brick) {
    brick.disableBody(true, true);
    score += 100;
    this.scoreText.setText('Score: ' + score);
    if (this.bricks.countActive() === 0) {
        resetLevel();
    }
};

var resetBall = function (ball, paddle) {
    ball.setVelocity(0);
    ball.setPosition(paddle.x, 500);
    ball.setData('onPaddle', true);
};

var resetLevel = function () {
    resetBall();
    this.bricks.children.each(function (brick) {
        brick.enableBody(false, 0, 0, true, true);
    });
};

var hitPaddle = function (ball, paddle) {
    var diff = 0;
    if (ball.x < paddle.x) {
        diff = paddle.x - ball.x;
        ball.setVelocityX(-10 * diff);
    }
    else if (ball.x > paddle.x) {
        diff = ball.x - paddle.x;
        ball.setVelocityX(10 * diff);
    }
    else {

        ball.setVelocityX(2 + Math.random() * 8);
    }
};

var postScore = function (score, username) {
    API.saveScore({
        game: "Breakout",
        score: score,
        username: username
    })
        .catch(err => console.log(err));
};



export default class Breakout extends Component {
    game = {};
    cursors = {};


    preload() {
        this.load.atlas('assets', './assets/breakout.png', './assets/breakout.json');
    }

    create() {
        this.physics.world.setBoundsCollision(true, true, true, false);
        this.bricks = this.physics.add.staticGroup({
            key: 'assets', frame: ['piece1.png', 'piece2.png', 'piece3.png', 'piece4.png', 'piece5.png', 'piece6.png'],
            frameQuantity: 10,
            gridAlign: { width: 10, height: 6, cellWidth: 64, cellHeight: 32, x: 112, y: 100 }
        });

        this.ball = this.physics.add.image(400, 500, 'assets', 'ball1.png').setCollideWorldBounds(true).setBounce(1);
        this.ball.setData('onPaddle', true);
        this.paddle = this.physics.add.image(400, 550, 'assets', 'paddle1.png').setImmovable();

        this.physics.add.collider(this.ball, this.bricks, hitBrick, null, this);
        this.physics.add.collider(this.ball, this.paddle, hitPaddle, null, this);

        this.scoreText = this.add.text(16, 16, 'Score: 0');
        this.livesText = this.add.text(16, 32, 'Lives: 3');

        this.input.on('pointermove', function (pointer) {
            this.paddle.x = Phaser.Math.Clamp(pointer.x, 52, 748);
            if (this.ball.getData('onPaddle')) {
                this.ball.x = this.paddle.x;
            }
        }, this);

        this.input.on('pointerup', function (pointer) {
            if (this.ball.getData('onPaddle')) {
                this.ball.setVelocity(-75, -300);
                this.ball.setData('onPaddle', false);
            }
        }, this);
    }

    update() {
        if (lives > 0) {
            if (this.ball.y > 600) {
                lives--;
                this.livesText.setText('Lives: ' + lives);
                if (lives > 0)
                    resetBall(this.ball, this.paddle);
                if (lives === 0) {
                    postScore(score, "test");
                }
            }
        }
    }


    componentDidMount() {
        const width = 960;
        const height = 640;

        const renderOptions = {
            width,
            height,
            renderer: Phaser.AUTO,
            parent: 'render-game',
            physics: {
                default: 'arcade',
                arcade: {
                    gravity: { y: 0 }
                }
            },
            scene: {
                preload: this.preload,
                create: this.create,
                update: this.update
            }
        };

        this.game = new Phaser.Game(renderOptions);
    };

    render() {
        return <div id='render-game' />
    };
}


