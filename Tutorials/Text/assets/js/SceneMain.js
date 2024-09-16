class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }

    preload() {
    	// load in game assets
    }

    create() {
        // define game objects for this scene
        this.text1 = this.add.text(game.config.width / 2, game.config.height / 2, "Hello, world!", {
            fontFamily: "Quicksand",
            fontSize: 48,
            color: "#ff3333"
        });
        this.text1.setOrigin(0.5, 0.5);
        this.text1.setStroke("#000000", 2); // color, thickness
        this.text1.setShadow(0, 10, "#00ff1e", 4, true, false); // x-offset, y-offset, color, thickness, fill, stroke
    }

    update() {
        // constant running loop
    }
}