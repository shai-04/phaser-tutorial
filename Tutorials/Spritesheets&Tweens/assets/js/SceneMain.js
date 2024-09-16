class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }

    preload() {
    	// load in game assets
        this.load.spritesheet('boy', './assets/images/boy.png', { frameWidth: 120, frameHeight: 200 });
    }

    create() {
        // define game objects for this scene
        this.char = this.add.sprite(-50, game.config.height / 2, "boy");

        // create animation
        this.anims.create({
            key: 'walk',
            frames: this.anims.generateFrameNumbers('boy'),
            // Or alternatively use this:
            // frames: [
            //     { key: 'boy', frame:0 },
            //     { key: 'boy', frame:1 },
            //     { key: 'boy', frame:2 },
            //     { key: 'boy', frame:3 },
            //     { key: 'boy', frame:4 },
            //     { key: 'boy', frame:5 },
            // ],
            frameRate: 8,
            repeat: -1
        });

        this.char.play('walk');

        this.doWalk();
    }

    doWalk() {
        // With tweens, you use the existing sprite properties to manipulate the sprite
        this.tweens.add({
            targets: this.char,
            duration: 5000,
            x: game.config.width + (this.char.displayWidth / 2),
            alpha: 0.5,
            angle: 360,
            scaleX: 0.4,
            scaleY: 0.4,
            onComplete: this.onCompleteHandler.bind(this),
        });
    }

    onCompleteHandler(tween, targets, custom) {
        console.log("Tween is complete");
        
        targets[0].x = -50;
        targets[0].y = game.config.height / 2;
        targets[0].alpha = 1;
        targets[0].angle = 0;
        targets[0].scaleX = 1;
        targets[0].scaleY = targets[0].scaleX;

        this.doWalk();
    }

    update() {
        // constant running loop
    }
}