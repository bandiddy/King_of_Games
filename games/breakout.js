var Breakout = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize:
    function Breakout ()
    {
        Phaser.Scene.call(this, { key: 'breakout' });
        this.bricks;
        this.paddle;
        this.ball;
        this.score = 0;
        this.lives = 3;
        this.scoreText;
        this.livesText;
    },

    preload: function ()
    {
        this.load.atlas('assets', 'assets/sprites/breakout.png', 'assets/sprites/breakout.json');
    },

    create: function ()
    {
        this.physics.world.setBoundsCollision(true, true, true, false);
        this.bricks = this.physics.add.staticGroup({
            key: 'assets', frame: [ 'piece1.png', 'piece2.png', 'piece3.png', 'piece4.png', 'piece5.png', 'piece6.png' ],
            frameQuantity: 10,
            gridAlign: { width: 10, height: 6, cellWidth: 64, cellHeight: 32, x: 112, y: 100 }
        });

        this.ball = this.physics.add.image(400, 500, 'assets', 'ball1.png').setCollideWorldBounds(true).setBounce(1);
        this.ball.setData('onPaddle', true);
        this.paddle = this.physics.add.image(400, 550, 'assets', 'paddle1.png').setImmovable();

        this.physics.add.collider(this.ball, this.bricks, this.hitBrick, null, this);
        this.physics.add.collider(this.ball, this.paddle, this.hitPaddle, null, this);

        this.scoreText = this.add.text(16, 16, 'Score: 0');
        this.livesText = this.add.text(16, 32, 'Lives: 3');

        this.input.on('pointermove', function (pointer) {
            this.paddle.x = Phaser.Math.Clamp(pointer.x, 52, 748);
            if (this.ball.getData('onPaddle'))
            {
                this.ball.x = this.paddle.x;
            }
        }, this);

        this.input.on('pointerup', function (pointer) {
            if (this.ball.getData('onPaddle'))
            {
                this.ball.setVelocity(-75, -300);
                this.ball.setData('onPaddle', false);
            }
        }, this);
    },

    hitBrick: function (ball, brick)
    {
        brick.disableBody(true, true);
        this.score += 100;
        this.scoreText.setText('Score: ' + this.score);
        if (this.bricks.countActive() === 0)
        {
            this.resetLevel();
        }
    },

    resetBall: function ()
    {
        this.ball.setVelocity(0);
        this.ball.setPosition(this.paddle.x, 500);
        this.ball.setData('onPaddle', true);
    },

    resetLevel: function ()
    {
        this.resetBall();
        this.bricks.children.each(function (brick) {
            brick.enableBody(false, 0, 0, true, true);
        });
    },

    hitPaddle: function (ball, paddle)
    {
        var diff = 0;
        if (ball.x < paddle.x)
        {
            diff = paddle.x - ball.x;
            ball.setVelocityX(-10 * diff);
        }
        else if (ball.x > paddle.x)
        {
            diff = ball.x -paddle.x;
            ball.setVelocityX(10 * diff);
        }
        else
        {

            ball.setVelocityX(2 + Math.random() * 8);
        }
    },

    update: function ()
    {
        if(this.lives > 0) {
            if (this.ball.y > 600)
            {
                this.lives--;
                this.livesText.setText('Lives: ' + this.lives);
                if(this.lives > 0)
                    this.resetBall();
            }             
        }
    }

});

var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    scene: [ Breakout ],
    physics: {
        default: 'arcade'
    }
};

var game = new Phaser.Game(config);
