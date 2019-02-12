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
       let timeText;
       let moveKeys;
       let music;
 var onEvent = (time) =>{

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
   stats.setText('HP: ' +carHP);
    if (carHP === 0) {
       hasCrashed = true;
       gameOver.setText('You Crashed');
       
    }

};

        // var scoreCounter = (time, hasCrashed) => {
        //     if(carHP > 0){
        //     score ++;
        //     score.setText('Score:' + score)   
        //     console.log(score)   
        //     }
        // };
       
class Racer extends Component {
    game = {};
    bg = '';
    cursors = {};
 
    // Build the Game class
    componentDidMount() {
        const width = 640;
        const height = 480;


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
                scene: { 
                preload: this.preload,
                create: this.create,
                update: this.update
                }
            
            
            };
        this.game = new Phaser.Game(config);
    };
    

        
        preload(){
        this.load.audio('theme', 'assets/gas.mp3');
        this.load.image('road', 'assets/road.png');
        this.load.image('evo', 'assets/player-evo.png');
        this.load.image('blue-traffic', 'assets/blue-traffic.png');
        this.load.image('yellow-traffic', 'assets/yellow-traffic.png');
    };
    
        create () {
            music = this.sound.add('theme');
            
          //  music.play();
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
           // score = this.add.text(10, 70, '', { fontSize: 48, color: '#ffff00' });
           // scoreEvent = this.time.addEvent({ delay: 2000, callback: scoreCounter, callbackScope: this, loop: true });
    
            console.log(hasCrashed);
    
          
    
        };
    
    
        update(timestep) {
           
       
          
    
        };
    
    
    
    
        
       
    

    render() {
        return (
        
        <div className="mx-auto" id='render-game'  > 
        <img src="assets/takumi.png"/>
        <img src="assets/keisuke.png"/>
        </div>
        
        );
        
    };

}
export default Racer;