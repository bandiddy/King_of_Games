var x = 0;
var y;
var player;
var cursors;
var blueTraffic;
var yellowTraffic;
var hasCrashed = false;
var speed = (Phaser.Math.RND.integerInRange(100, 400) / 2) / 1000;
var timerEvents = [];
var xArray = [220, 330, 470, 600];
var carHP = 100;

var menuScene = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

        function menuScene() {
            Phaser.Scene.call(this, { key: 'menuScene' });
        },

    preload: function () {
        this.load.image('face', 'assets/pics/bw-face.png');
    },

    create: function () {
        this.add.text(200, 100, 'Speed Racer!', { fontFamily: 'Arial', fontSize: 64, color: '#ffff00' });
        this.add.text(200, 150, 'I gotta get Home!!', { fontFamily: 'Arial', fontSize: 20, color: '#ffff00' })
        this.add.text(200, 500, 'Click to start!', { fontFamily: 'Arial', fontSize: 20, color: '#ffff00' })
        this.input.once('pointerdown', function () {

            console.log('From menuScene to driveScene');

            this.scene.start('driveScene');

        }, this);
    }

});

var driveScene = new Phaser.Class({
    Extends: Phaser.Scene,
    Initialize:
        function driveScene() {
            Phaser.Scene.call(this, { key: 'driveScene' })
        },

    preload: function () {
        this.load.image('road', 'assets/road.png');
        this.load.image('evo', 'assets/player-evo.png');
        this.load.image('blue-traffic', 'assets/blue-traffic.png');
        this.load.image('yellow-traffic', 'assets/yellow-traffic.png');
    },


    create: function () {

        this.cameras.main.fadeFrom(2000, Phaser.Math.Between(50, 255), Phaser.Math.Between(50, 255), Phaser.Math.Between(50, 255));

        this.cameras.main.on('camerafadeoutcomplete', function () {
            this.scene.restart();
        }, this);
        this.scene.restart();

        this.physics.world.gravity.y = Phaser.Math.RND.integerInRange(200, 400);
        x = Phaser.Math.RND.integerInRange(200, 600);
        y = -150;
        this.image = this.add.image(400, 300, 'road');
        player = this.physics.add.image(330, 500, 'evo')

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
            timerEvents.push(this.time.addEvent({ delay: 100 * i + 1500, callback: onEvent, callbackScope: this, loop: true }));
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

    },


    update: function (timestep, delta) {



    },

    onEvent: function (time) {
        console.log(time);
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

    },
    hitCar: function (player, traffic) {
        carHP--;
        console.log(carHP);
        if (carHP <= 0) {
            hasCrashed = true;
            resetGame();
        }
    },
    resetGame: function () {
       this.scene.start('menuScene');
    }
})

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
            gravity: { y: 60 }
        }
    },
    scene: [menuScene, driveScene]
};

var game = new Phaser.Game(config);
