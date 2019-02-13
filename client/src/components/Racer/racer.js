import React, { Component } from 'react';
import Phaser from 'phaser';
import API from "../../utils/API";
import "./Racer.css";

let x = 0;
let y;
let player;
let blueTraffic;
let yellowTraffic;
let hasCrashed = false;
let timerEvents = [];
let xArray = [220, 330, 470, 600];
let carHP = 100;
let stats = null;
let score = 0;
let gameOver = null;
let text = null;
let scoreEvent;
let scoreText;
let timeText;
let moveKeys;
let music;

var onEvent = (time) => {

    var previousX = x;

    while (x === previousX) {
        x = Phaser.Math.RND.integerInRange(0, 3);
    }
    Phaser.Math.RND.integerInRange(0, 100);
    if (Phaser.Math.RND.integerInRange(0, 100) % 2 === 0) {
        blueTraffic.create(xArray[x], y, 'blue-traffic');
    } else {
        yellowTraffic.create(xArray[x], y, 'yellow-traffic').setGravity(0, 200);
    }

}
var hitCar = (player, traffic, hasCrashed) => {

    if (carHP > 0) {
        carHP--;
    }
    console.log(carHP);
    stats.setText('HP: ' + carHP);
    if (carHP === 0) {
        hasCrashed = true;
        gameOver.setText('You Crashed');

    }

};

var scoreCounter = (time, hasCrashed) => {
    if(carHP > 0){
   score +100;
   scoreText.setText('Score:' + score)   
   console.log(score)   
    }
 };

class Racer extends Component {
    game = {};
    bg = '';
    cursors = {};

    // Build the Game class
    componentDidMount() {
        const width = 800;
        const height = 600;


        const config = {

            type: Phaser.AUTO,
            width,
            height,
            parent: 'render-game',
            physics: {
                default: 'arcade',
                arcade: {
                    debug: true,
                    gravity: { y: 60 }
                }
            },
            scene:
                [this.Preloader, this.MenuScene, this.DriveScene, this.GameOver]



        };
        this.game = new Phaser.Game(config);
    };


    Preloader = new Phaser.Class({

        Extends: Phaser.Scene,

        initialize:

            function Preloader() {
                Phaser.Scene.call(this, { key: 'preloader' });
            },

        preload: function () {
            this.load.audio('theme', 'assets/gas.mp3');
            this.load.image('road', 'assets/road.png');
            this.load.image('evo', 'assets/player-evo.png');
            this.load.image('blue-traffic', 'assets/blue-traffic.png');
            this.load.image('yellow-traffic', 'assets/yellow-traffic.png');
        },

        create: function () {
            console.log('%c Preloader ', 'background: green; color: white; display: block;');



            this.scene.start('menuscene');
        }

    });

    MenuScene = new Phaser.Class({

        Extends: Phaser.Scene,

        initialize:

            function MenuScene() {
                Phaser.Scene.call(this, { key: 'menuscene' });
                window.MENU = this;
            },

        preload: function () {
            this.load.audio('opening', 'assets/initialD.mp3')
            this.load.image('evo10background', 'assets/evo10background.png');
        },

        create: function () {
            //var themeMusic = this.sound.add('opening');

            //themeMusic.play();
            this.image = this.add.image(400, 300, 'evo10background');
            text = this.add.text(200, 100, 'Speed Man!', { fontSize: 64, color: '#ffff00' });
            text = this.add.text(300, 200, 'I have a Need... for Speed!!', { fontSize: 20, color: '#ffff00' })
            text = this.add.text(300, 400, 'Click to start!', { fontSize: 20, color: '#ffff00' })
            this.input.once('pointerup', function () {

                console.log('From menuScene to driveScene');

                //themeMusic.pause();
                this.scene.start('drivescene');

            }, this);

        }

    });

    DriveScene = new Phaser.Class({
        Extends: Phaser.Scene,
        initialize:
            function DriveScene() {
                Phaser.Scene.call(this, { key: 'drivescene' })
                window.GAME = this;
            },
       

        create() {
            music = this.sound.add('theme');

            // music.play();
            this.physics.world.gravity.y = Phaser.Math.RND.integerInRange(200, 400);
            x = Phaser.Math.RND.integerInRange(200, 600);
            y = -150;
            this.image = this.add.image(400, 300, 'road');
            player = this.physics.add.image(330, 500, 'evo');

            blueTraffic = this.physics.add.group({
                defaultKey: 'blue-traffic',
                collideWorldBounds: false
            });
            yellowTraffic = this.physics.add.group({
                defaultKey: 'yellow-traffic',
                collideWorldBounds: false
            });

            player.body.allowGravity = false
            this.physics.add.collider(player, blueTraffic, hitCar);
            this.physics.add.collider(player, yellowTraffic, hitCar);
            blueTraffic.create(x, y, 'blue-traffic');
            yellowTraffic.create(x, y, 'yellow-traffic').setGravity(0, 200);

            for (var i = 0; i < 3; i++) {
                timerEvents.push(this.time.addEvent({ delay: 100 * i + 2000, callback: onEvent, callbackScope: this, loop: true }));
            }

            moveKeys = this.input.keyboard.addKeys({
                'up': Phaser.Input.Keyboard.KeyCodes.W,
                'down': Phaser.Input.Keyboard.KeyCodes.S,
                'left': Phaser.Input.Keyboard.KeyCodes.A,
                'right': Phaser.Input.Keyboard.KeyCodes.D
            });

            this.input.keyboard.on('keydown_W', function (event) {
                player.setVelocityY(-500);
            });
            this.input.keyboard.on('keydown_S', function (event) {
                player.setVelocityY(500);
            });
            this.input.keyboard.on('keydown_A', function (event) {
                player.setVelocityX(-500);
            });
            this.input.keyboard.on('keydown_D', function (event) {
                player.setVelocityX(500);
            });


            this.input.keyboard.on('keyup_W', function (event) {
                if (moveKeys['down'].isUp)
                    player.setVelocityY(0);
            });
            this.input.keyboard.on('keyup_S', function (event) {
                if (moveKeys['up'].isUp)
                    player.setVelocityY(0);
            });
            this.input.keyboard.on('keyup_A', function (event) {
                if (moveKeys['right'].isUp)
                    player.setVelocityX(0);
            });
            this.input.keyboard.on('keyup_D', function (event) {
                if (moveKeys['left'].isUp)
                    player.setVelocityX(0);
            });
            stats = this.add.text(10, 10, '', { fontSize: 48, color: '#ffff00' })
            gameOver = this.add.text(100, 200, '', { fontSize: 100, color: '#ffff00' })
            stats.setText('HP: ' + carHP);
            scoreText= this.add.text(10, 70, '', { fontSize: 48, color: '#ffff00' });
            scoreEvent = this.time.addEvent({ delay: 2000, callback: scoreCounter, callbackScope: this, loop: true });

            console.log(hasCrashed);



        },


        update(timestep) {




        },
    })

    GameOver = new Phaser.Class({

        Extends: Phaser.Scene,

        initialize:

            function GameOver() {
                Phaser.Scene.call(this, { key: 'gameover' });
                window.OVER = this;
            },

        create: function () {
            console.log('%c GameOver ', 'background: green; color: white; display: block;');

            this.add.text(300, 500, 'Game Over - Click to start restart', { fontSize: '16px Courier', color: '#ffff00' });

            this.input.once('pointerup', function (event) {

                this.scene.start('menuscene');

            }, this);
        }

    });
    render() {
        return (

            <div className="racer" id='render-game'  >
                {/* <img className="takumi" src="assets/takumi.png" height="250" width="270"/>
        <img className="keisuke" src="assets/keisuke.png" height="250" width="270"/> */}
            </div>

        );

    };

}
export default Racer;