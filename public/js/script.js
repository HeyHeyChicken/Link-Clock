const SIZE = 16;

class Example extends Phaser.Scene
{
    scoreText;
    score = 0;
    cursors;
    platforms;
    bombs;
    stars;
    player;
    speed = 80;

    preload ()
    {
        this.load.spritesheet('dude', '/img/tiles.png', { frameWidth: SIZE, frameHeight: 24 });
        
	    this.load.image('assets', '/img/assets.png');
        this.load.image('gem', '/img/gem.png');
        this.load.tilemapTiledJSON('tilemap', '/map.json');
    }

    create ()
    {
        const MAP = this.make.tilemap({ key: 'tilemap' });
        const tileset = MAP.addTilesetImage('assets', 'assets');
        MAP.createLayer('level_1', tileset);
        MAP.createLayer('level_2', tileset);

        const COLLISION = MAP.createLayer('collision', tileset);
        COLLISION.visible = false;
        COLLISION.setCollisionByProperty({ solid: true }); 

        this.platforms = this.physics.add.staticGroup();

        // The player and its settings
        this.player = this.physics.add.sprite(SIZE * 10, SIZE * 26, 'dude');
        this.player.body.setSize(SIZE, SIZE, false);
        document.okok = this.player;

        MAP.createLayer('level_3', tileset);

        //  Our player animations
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('dude', { start: 12, end: 15 }),
            frameRate: 5,
        });

        this.anims.create({
            key: 'down',
            frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
            frameRate: 5,
        });

        this.anims.create({
            key: 'up',
            frames: this.anims.generateFrameNumbers('dude', { start: 4, end: 7 }),
            frameRate: 5,
        });

        this.anims.create({
            key: 'turn',
            frames: [ { key: 'dude', frame: 0 } ],
            frameRate: 5
        });

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('dude', { start: 8, end: 11 }),
            frameRate: 5,
        });

        //  Input Events
        this.cursors = this.input.keyboard.createCursorKeys();

        this.physics.add.collider(this.player, COLLISION);
    }

    update ()
    {
        if (this.cursors.up.isDown)
        {
            this.player.setVelocityX(0);
            this.player.setVelocityY(this.speed * -1);

            this.player.anims.play('up', true);
        }
        else if (this.cursors.down.isDown)
        {
            this.player.setVelocityX(0);
            this.player.setVelocityY(this.speed);

            this.player.anims.play('down', true);
        }
        else if (this.cursors.left.isDown)
        {
            this.player.setVelocityY(0);
            this.player.setVelocityX(this.speed * -1);

            this.player.anims.play('left', true);
        }
        else if (this.cursors.right.isDown)
        {
            this.player.setVelocityY(0);
            this.player.setVelocityX(this.speed);

            this.player.anims.play('right', true);
        }
        else
        {
            this.player.setVelocityY(0);
            this.player.setVelocityX(0);

            this.player.anims.play('turn');
        }
            
        this.player.x = Math.round(this.player.x);
        this.player.y = Math.round(this.player.y);
    }
}

const game = new Phaser.Game({
    type: Phaser.AUTO,
    width: 800,
    height: 480,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene: Example
});