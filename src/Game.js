import Input from "./Input";
import GameObject from "./GameObject";

import Player from "./Player";
import Background from "./Background";
import Enemy from "./Enemy";

export default class Game {
    constructor(width, height) {
        this.projectiles = [];
        this.width = width;
        this.height = height;
        this.input = new Input(this);
        this.player = new Player(0, 0, 30, 30, "green", 1, this);
        this.background = new Background(0, 0, width, height, null, 0.2, this, "./src/assets/Floor.png");
        this.enemy = new Enemy(0, 0 ,30 ,30, "green", 1, this);
        console.log("Ny instans av game ", this.width);
        
    }

    update(deltaTime) {
        this.background.update(deltaTime);
        this.player.update(deltaTime);
        this.enemy.update(deltaTime);
    }

    draw(ctx) {
        
        this.background.draw(ctx);
        this.player.draw(ctx);
        this.enemy.draw(ctx);
        this.projectiles.forEach((projectile) => {
            projectile.draw(ctx);
        });
        
    }
}
