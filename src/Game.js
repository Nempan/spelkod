import GameObject from "./GameObject"
import Input from "./Input"
import Player from "./Player"

export default class Game {
    constructor(width, height) {
        this.projectiles = []
        this.width = width
        this.height = height
        this.input = new Input(this)
        this.player = new Player(0, 0, 50, 50, "green", 1, this)
        console.log("ny instans av game ", this.width)
        
    }

    update(deltaTime) {
        this.player.update(deltaTime)


    }

    draw(ctx) {
    this.player.draw(ctx)
    this.projectiles.forEach((projectile) => {
        projectile.draw(ctx)
      })

    }
}