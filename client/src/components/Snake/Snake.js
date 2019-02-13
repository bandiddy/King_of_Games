import React, { Component } from 'react';
import Phaser from 'phaser';
import API from "../../utils/API";

var snake;
var food;
var cursors;
var scoreText;
var UP = 0;
var DOWN = 1;
var LEFT = 2;
var RIGHT = 3;

var repositionFood = function () {
    var testGrid = [];

    for (var y = 0; y < 30; y++) {
        testGrid[y] = [];
        for (var x = 0; x < 40; x++) {
            testGrid[y][x] = true;
        }
    }

    snake.updateGrid(testGrid);
    var validLocations = [];

    for (var y = 0; y < 30; y++) {
        for (var x = 0; x < 40; x++) {
            if (testGrid[y][x] === true) {
                validLocations.push({ x: x, y: y });
            }
        }
    }

    if (validLocations.length > 0) {
        var pos = Phaser.Math.RND.pick(validLocations);
        food.setPosition(pos.x * 16, pos.y * 16);
        return true;
    }
    else {
        return false;
    }
};

var postScore = function(food) {
    API.saveScore({
        game: "Snake",
        score: food.total,
        username: "username"
    })
    .catch(err => console.log(err));
};



class Snake extends Component {
    preload() {
        this.load.image('food', 'assets/food.png');
        this.load.image('body', 'assets/body.png');
    }
    
    create() {
        var Food = new Phaser.Class({
            Extends: Phaser.GameObjects.Image,
            initialize:

                function Food(scene, x, y) {
                    Phaser.GameObjects.Image.call(this, scene)
                    this.setTexture('food');
                    this.setPosition(x * 16, y * 16);
                    this.setOrigin(0);
                    this.total = 0;
                    scene.children.add(this);
                },
            eat: function () {
                this.total++;
            }
        });

        var Snake = new Phaser.Class({
            initialize:
                function Snake(scene, x, y) {
                    this.headPosition = new Phaser.Geom.Point(x, y);
                    this.body = scene.add.group();
                    this.head = this.body.create(x * 16, y * 16, 'body');
                    this.head.setOrigin(0);
                    this.alive = true;
                    this.speed = 100;
                    this.moveTime = 0;
                    this.tail = new Phaser.Geom.Point(x, y);
                    this.heading = RIGHT;
                    this.direction = RIGHT;
                },

            update: function (time) {
                if (time >= this.moveTime) {
                    return this.move(time);
                }
            },

            faceLeft: function () {
                if (this.direction === UP || this.direction === DOWN) {
                    this.heading = LEFT;
                }
            },

            faceRight: function () {
                if (this.direction === UP || this.direction === DOWN) {
                    this.heading = RIGHT;
                }
            },

            faceUp: function () {
                if (this.direction === LEFT || this.direction === RIGHT) {
                    this.heading = UP;
                }
            },

            faceDown: function () {
                if (this.direction === LEFT || this.direction === RIGHT) {
                    this.heading = DOWN;
                }
            },

            move: function (time) {
                switch (this.heading) {
                    case LEFT:
                        this.headPosition.x = Phaser.Math.Wrap(this.headPosition.x - 1, 0, 40);
                        break;
                    case RIGHT:
                        this.headPosition.x = Phaser.Math.Wrap(this.headPosition.x + 1, 0, 40);
                        break;
                    case UP:
                        this.headPosition.y = Phaser.Math.Wrap(this.headPosition.y - 1, 0, 30);
                        break;
                    case DOWN:
                        this.headPosition.y = Phaser.Math.Wrap(this.headPosition.y + 1, 0, 30);
                        break;
                }

                this.direction = this.heading;
                Phaser.Actions.ShiftPosition(this.body.getChildren(), this.headPosition.x * 16, this.headPosition.y * 16, 1, this.tail);
                var hitBody = Phaser.Actions.GetFirst(this.body.getChildren(), { x: this.head.x, y: this.head.y }, 1);

                if (hitBody) {
                    this.alive = false;
                    postScore(food);
                    return false;
                }
                else {
                    this.moveTime = time + this.speed;
                    return true;
                }
            },

            grow: function () {
                var newPart = this.body.create(this.tail.x, this.tail.y, 'body');
                newPart.setOrigin(0);
            },

            collideWithFood: function (food) {
                if (this.head.x === food.x && this.head.y === food.y) {
                    this.grow();
                    food.eat();
                    if (this.speed > 20 && food.total % 5 === 0) {
                        this.speed -= 5;
                    }

                    return true;
                }
                else {
                    return false;
                }
            },

            updateGrid: function (grid) {
                this.body.children.each(function (segment) {
                    var bx = segment.x / 16;
                    var by = segment.y / 16;
                    grid[by][bx] = false;
                });
                return grid;
            }
        });

        this.scoreText = this.add.text(16, 16, 'Score: 0');
        food = new Food(this, 3, 4);
        snake = new Snake(this, 8, 8);
        cursors = this.input.keyboard.createCursorKeys();
    }

    update(time, delta) {
        if (!snake.alive) {
            return;
        }

        if (cursors.left.isDown) {
            snake.faceLeft();
        }
        else if (cursors.right.isDown) {
            snake.faceRight();
        }
        else if (cursors.up.isDown) {
            snake.faceUp();
        }
        else if (cursors.down.isDown) {
            snake.faceDown();
        }

        if (snake.update(time)) {
            if (snake.collideWithFood(food)) {
                repositionFood();
                this.scoreText.setText('Score: ' + food.total);
            }
        }
    }

    componentDidMount() {
        const width = 640;
        const height = 480;

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
    }

    render() {
        return <div id='render-game' />
    }
}


export default Snake;
