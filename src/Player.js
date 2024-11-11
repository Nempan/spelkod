import GameObject from "./GameObject"

export default class Player extends GameObject {
    constructor(x, y, width, heigth, color, speed, game) {
        super( x, y, width, heigth, color, speed, game)
        this.game = game
        this.speedX = 0
        this.maxSpeedX = 0.4
    }

    update (deltaTime) {
        if (this.game.input.keys.has("ArrowLeft")) {
            console.log("pilåtvänst")
            this.speedX -= this.maxSpeedX
        }

        if (this.game.input.keys.has("ArrowRight")) {
            console.log("pilåthööööööööö")
            this.speedX += this.maxSpeedX
        }

        if (this.game.input.keys.has("ArrowUp")) {
            console.log("pilåtuppiiiis")
            this.y -= 4
        }

        if (this.game.input.keys.has("ArrowDown")) {
            console.log("pilåtneeeeeeeer")
            this.y += 4
        }

        if (!this.game.input.keys.has("ArrowRight") && !this.game.input.keys.has("ArrowLeft")) {
            this.speedX = 0
        }

        this.x += this.speedX

        if (this.y > 350) {
            this.y = 350
        } else {
            this.y += 2
        }

    }

}

