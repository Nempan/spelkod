import Ball from "./Ball"
import GameObject from "./GameObject"
import Input from "./Input"
import Player from "./Player"

export default class Game {
    constructor(width, height) {
        this.width = width
        this.height = height
        this.input = new Input(this)
        this.player = new Player(0, 0, 50, 50, "green", 1, this)
        console.log("ny instans av game ", this.width)
        this.box = new GameObject(856, 100 ,50, 50, "purple", 1)
        this.box1 = new GameObject(10, 100 ,50, 50, "purple", -1)
        this.ball = new Ball(100, 200, 100, 100, "red", -1)
    }

    update(deltaTime) {
        this.box.update(deltaTime)
        this.box1.update(deltaTime)
        this.ball.update(deltaTime)
        this.player.update(deltaTime)


    }

    draw(ctx) {
    this.box.draw(ctx)
    this.box1.draw(ctx)
    this.ball.draw(ctx)
    this.player.draw(ctx)

    }
}