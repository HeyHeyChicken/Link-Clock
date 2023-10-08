const SIZE = 16;
const NUMBERS = [
    [
        [0,0],[1,0],[2,0],[3,0],[4,0],[5,0],
        [0,1],[1,1],[2,1],[3,1],[4,1],[5,1],
        [0,2],[1,2],[4,2],[5,2],
        [0,3],[1,3],[4,3],[5,3],
        [0,4],[1,4],[4,4],[5,4],
        [0,5],[1,5],[4,5],[5,5],
        [0,6],[1,6],[4,6],[5,6],
        [0,7],[1,7],[4,7],[5,7],
        [0,8],[1,8],[2,8],[3,8],[4,8],[5,8],
        [0,9],[1,9],[2,9],[3,9],[4,9],[5,9],
    ]
];

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
        this.player.body.setSize(SIZE, SIZE);
        this.player.body.offset.y = 8;
        document.okok = this.player;

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

        const GROUP = this.physics.add.group();

        this.showNumber(9, 11, 0, GROUP);

        MAP.createLayer('level_3', tileset);
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

    showNumber(x, y, number, group){
        NUMBERS[number].forEach(element => {
            group.add(this.addGem(x + element[0], y + element[1]));
        });
    }

    addGem(x, y){
        return this.physics.add.image(SIZE * x - SIZE / 2, SIZE * y - SIZE / 2, 'gem');
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