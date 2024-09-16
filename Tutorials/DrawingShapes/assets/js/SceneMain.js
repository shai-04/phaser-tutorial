class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }

    preload() {
    	// load in game assets
    }

    create() {
        // define game objects for this scene
        this.graphics = this.add.graphics();

        // Creating a line
        this.graphics.lineStyle(8, 0xff0000);
        this.graphics.moveTo(0, 0);
        this.graphics.lineTo(game.config.width, game.config.height);
        this.graphics.strokePath();

        this.graphics.strokeRect(10, 300, 100, 100); // x, y, width, height

        this.graphics.strokeCircle(300, 200, 60); // x, y, radius

        this.graphics.fillStyle(0x00ff00, .75); // color, alpha value
        this.graphics.fillCircle(300, 400, 60); // x, y, radius
    }

    update() {
        // constant running loop
    }
}