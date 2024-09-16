class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }

    preload() {
    	// load in game assets
        this.load.audio('cat', ["./assets/audio/meow.mp3", "./assets/audio/meow.ogg"])
    }

    create() {
        // define game objects for this scene
        this.catSound = this.sound.add("cat");
        this.catSound.play();
    }

    update() {
        // constant running loop
    }
}