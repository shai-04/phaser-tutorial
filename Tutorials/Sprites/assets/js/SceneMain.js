class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }

    preload() {
    	// load in game assets
        this.load.image("face", "./assets/images/face.png");
    }

    create() {
        // define game objects for this scene
        this.face = this.add.image(100, 200, "face");
        this.face.alpha = .8; // values between 0 and 1

        // setting width and height maintaining aspect ratio
        this.face.displayWidth = 500;
        this.face.displayHeight = this.face.displayWidth;

        this.face.scaleX = 0.75;
        this.face.scaleY = 0.75;

        this.face.angle = -45;

        this.face.setOrigin(0.5, 0.5);

        this.face.x = game.config.width / 2;
        this.face.y = game.config.height / 2;
        
        // Clicking a sprite
        this.face.setInteractive();
        
        this.face.on('pointerdown', () => {
            this.face.alpha = 0.3;
        });
        this.face.on('pointerup', () => {
            this.face.alpha = 1;
        });
    }

    update() {
        // constant running loop
    }
}