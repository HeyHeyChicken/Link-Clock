const SIZE = 16;
const NUMBERS = [
    [ // 0
        [0,0],[1,0],[2,0],[3,0],[4,0],[5,0],
        [0,1],[1,1],[2,1],[3,1],[4,1],[5,1],
        [0,2],[1,2],            [4,2],[5,2],
        [0,3],[1,3],            [4,3],[5,3],
        [0,4],[1,4],            [4,4],[5,4],
        [0,5],[1,5],            [4,5],[5,5],
        [0,6],[1,6],            [4,6],[5,6],
        [0,7],[1,7],            [4,7],[5,7],
        [0,8],[1,8],[2,8],[3,8],[4,8],[5,8],
        [0,9],[1,9],[2,9],[3,9],[4,9],[5,9],
    ],
    [ // 1
                    [2,0],[3,0],
                    [2,1],[3,1],
        [0,2],[1,2],[2,2],[3,2],
        [0,3],[1,3],[2,3],[3,3],
                    [2,4],[3,4],
                    [2,5],[3,5],
                    [2,6],[3,6],
                    [2,7],[3,7],
        [0,8],[1,8],[2,8],[3,8],[4,8],[5,8],
        [0,9],[1,9],[2,9],[3,9],[4,9],[5,9],
    ],
    [ // 2
        [0,0],[1,0],[2,0],[3,0],[4,0],[5,0],
        [0,1],[1,1],[2,1],[3,1],[4,1],[5,1],
                                [4,2],[5,2],
                                [4,3],[5,3],
        [0,4],[1,4],[2,4],[3,4],[4,4],[5,4],
        [0,5],[1,5],[2,5],[3,5],[4,5],[5,5],
        [0,6],[1,6],
        [0,7],[1,7],
        [0,8],[1,8],[2,8],[3,8],[4,8],[5,8],
        [0,9],[1,9],[2,9],[3,9],[4,9],[5,9],
    ],
    [ // 3
        [0,0],[1,0],[2,0],[3,0],[4,0],[5,0],
        [0,1],[1,1],[2,1],[3,1],[4,1],[5,1],
                                [4,2],[5,2],
                                [4,3],[5,3],
        [0,4],[1,4],[2,4],[3,4],[4,4],[5,4],
        [0,5],[1,5],[2,5],[3,5],[4,5],[5,5],
                                [4,6],[5,6],
                                [4,7],[5,7],
        [0,8],[1,8],[2,8],[3,8],[4,8],[5,8],
        [0,9],[1,9],[2,9],[3,9],[4,9],[5,9],
    ],
    [ // 4
        [0,0],[1,0],            [4,0],[5,0],
        [0,1],[1,1],            [4,1],[5,1],
        [0,2],[1,2],            [4,2],[5,2],
        [0,3],[1,3],            [4,3],[5,3],
        [0,4],[1,4],            [4,4],[5,4],
        [0,5],[1,5],            [4,5],[5,5],
        [0,6],[1,6],[2,6],[3,6],[4,6],[5,6],
        [0,7],[1,7],[2,7],[3,7],[4,7],[5,7],
                                [4,8],[5,8],
                                [4,9],[5,9],
    ],
    [ // 5
        [0,0],[1,0],[2,0],[3,0],[4,0],[5,0],
        [0,1],[1,1],[2,1],[3,1],[4,1],[5,1],
        [0,2],[1,2],
        [0,3],[1,3],
        [0,4],[1,4],[2,4],[3,4],[4,4],[5,4],
        [0,5],[1,5],[2,5],[3,5],[4,5],[5,5],
                                [4,6],[5,6],
                                [4,7],[5,7],
        [0,8],[1,8],[2,8],[3,8],[4,8],[5,8],
        [0,9],[1,9],[2,9],[3,9],[4,9],[5,9],
    ],
    [ // 6
        [0,0],[1,0],[2,0],[3,0],[4,0],[5,0],
        [0,1],[1,1],[2,1],[3,1],[4,1],[5,1],
        [0,2],[1,2],
        [0,3],[1,3],
        [0,4],[1,4],[2,4],[3,4],[4,4],[5,4],
        [0,5],[1,5],[2,5],[3,5],[4,5],[5,5],
        [0,6],[1,6],            [4,6],[5,6],
        [0,7],[1,7],            [4,7],[5,7],
        [0,8],[1,8],[2,8],[3,8],[4,8],[5,8],
        [0,9],[1,9],[2,9],[3,9],[4,9],[5,9],
    ],
    [ // 7
        [0,0],[1,0],[2,0],[3,0],[4,0],[5,0],
        [0,1],[1,1],[2,1],[3,1],[4,1],[5,1],
                                [4,2],[5,2],
                                [4,3],[5,3],
                                [4,4],[5,4],
                                [4,5],[5,5],
                                [4,6],[5,6],
                                [4,7],[5,7],
                                [4,8],[5,8],
                                [4,9],[5,9],
    ],
    [ // 8
        [0,0],[1,0],[2,0],[3,0],[4,0],[5,0],
        [0,1],[1,1],[2,1],[3,1],[4,1],[5,1],
        [0,2],[1,2],            [4,2],[5,2],
        [0,3],[1,3],            [4,3],[5,3],
        [0,4],[1,4],[2,4],[3,4],[4,4],[5,4],
        [0,5],[1,5],[2,5],[3,5],[4,5],[5,5],
        [0,6],[1,6],            [4,6],[5,6],
        [0,7],[1,7],            [4,7],[5,7],
        [0,8],[1,8],[2,8],[3,8],[4,8],[5,8],
        [0,9],[1,9],[2,9],[3,9],[4,9],[5,9],
    ],
    [ // 9
        [0,0],[1,0],[2,0],[3,0],[4,0],[5,0],
        [0,1],[1,1],[2,1],[3,1],[4,1],[5,1],
        [0,2],[1,2],            [4,2],[5,2],
        [0,3],[1,3],            [4,3],[5,3],
        [0,4],[1,4],[2,4],[3,4],[4,4],[5,4],
        [0,5],[1,5],[2,5],[3,5],[4,5],[5,5],
                                [4,6],[5,6],
                                [4,7],[5,7],
                                [4,8],[5,8],
                                [4,9],[5,9],
    ],
    [ // :
        [2,2],[3,2],
        [2,3],[3,3],
        [2,6],[3,6],
        [2,7],[3,7],
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
        MAP.createLayer('level_1', tileset).setDepth(1);
        MAP.createLayer('level_2', tileset).setDepth(2);

        const COLLISION = MAP.createLayer('collision', tileset);
        COLLISION.visible = false;
        COLLISION.setCollisionByProperty({ solid: true }); 

        this.platforms = this.physics.add.staticGroup();

        const GROUP = this.physics.add.group();

        // The player and its settings
        this.player = this.physics.add.sprite(SIZE * 10, SIZE * 26, 'dude');
        this.player.setDepth(4);
        this.player.body.setSize(SIZE, SIZE);
        this.player.body.offset.y = 8;

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
        this.physics.add.collider(this.player, GROUP, (player, gem) => {
            gem.destroy(true);
          }, null, this);


        MAP.createLayer('level_3', tileset).setDepth(5);


        this.setTime(GROUP);
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

    setTime(group){
        while(group.children.entries.length){
            group.children.entries[0].destroy(true);
        }

        const NOW = new Date();
        const HOURS = this.twoDigits(NOW.getHours());
        const MINUTES = this.twoDigits(NOW.getMinutes());
        
        this.showNumber(9, 11, parseInt(HOURS[0]), group);
        this.showNumber(17, 11, parseInt(HOURS[1]), group);
        
        this.showNumber(23, 11, 10, group);

        this.showNumber(29, 11, parseInt(MINUTES[0]), group);
        this.showNumber(37, 11, parseInt(MINUTES[1]), group);

        setTimeout(() => {
            this.setTime(group);
        }, 60 * 1000 - new Date().getSeconds() * 1000 - new Date().getMilliseconds());
    }

    twoDigits(input){
        if(input < 10)
            return "0" + input;
        return input.toString();
    }

    showNumber(x, y, number, group){
        if(isNaN(number))
            return;
        NUMBERS[number].forEach(element => {
            const GEM = this.addGem(x + element[0], y + element[1]);
            group.add(GEM);
        });
    }

    addGem(x, y){
        const X = SIZE * x - SIZE / 2;
        const Y = SIZE * y - SIZE / 2;
        const GEM = this.physics.add.image(X, Y, 'gem');
        GEM.setDepth(3);
        return GEM;
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