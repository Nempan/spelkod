import GameObject from "./GameObject";
import Input from "./Input";
import Player from "./Player";
import Background from "./Background";

export default class Game {
    constructor(width, height) {
        this.projectiles = [];
        this.width = width;
        this.height = height;
        this.input = new Input(this);
        this.player = new Player(0, 0, 30, 30, "green", 1, this);
        this.background = new Background(0, 0, width, height, null, 0.5, this, "./src/assets/Floor.png");
        console.log("Ny instans av game ", this.width);
    }

    update(deltaTime) {
        this.background.update(deltaTime);
        this.player.update(deltaTime);
    }

    draw(ctx) {
        this.background.draw(ctx);
        this.player.draw(ctx);
        this.projectiles.forEach((projectile) => {
            projectile.draw(ctx);
        });
    }
}
