import GameObject from "./GameObject"

export default class Player extends GameObject {
    constructor(x, y, width, heigth, color, speed, game) {
        super( x, y, width, heigth, color, speed, game)

        this.image = new Image()
        this.image.src = "./src/assets/Cat.png"

        this.game = game

        this.speedX = 0
        this.speedY = 0
        this.maxSpeedX = 0.1
        this.jumpSpeed = 20
        this.color = "255, 0, 0"

        this.frameWidth = 32
        this.frameHeight = 32
        this.frameX = 0
        this.frameY = 0
        this.flip = false
        this.maxFrames = 7
        this.fps = 20
        this.timer = 0
        this.interval = 1000 / this.fps

    }

    update(deltaTime) {
        if (this.game.input.keys.has("ArrowLeft")) {
          console.log("pil vänster")
          this.speedX -= this.maxSpeedX
        }
        if (this.game.input.keys.has("ArrowRight")) {
          this.speedX += this.maxSpeedX
        }
        if (
          this.game.input.keys.has("ArrowRight") &&
          this.game.input.keys.has("ArrowLeft")
        ) {
          this.speedX = 0
        }
        if (
          !this.game.input.keys.has("ArrowRight") &&
          !this.game.input.keys.has("ArrowLeft")
        ) {
          this.speedX = 0
        }
    
        if (this.game.input.keys.has("ArrowUp") && this.grounded) {
          this.speedY = -this.jumpSpeed
          this.grounded = false
        }
    
        if (this.grounded) {
          this.speedY = 0
        } else {
          this.speedY += 1
        }
    
        this.y += this.speedY
        this.x += this.speedX
    
        if (this.speedX != 0) {
          this.frameY = 4
          this.maxFrames = 7
        } else {
          this.frameY = 1
          this.maxFrames = 3
        }
    
        
        if (this.y > 320) {
          this.y = 320
          this.speedY = 0
          this.grounded = true
        }
    
        if (this.timer > this.interval) {
          this.frameX++
          this.timer = 0
        } else {
          this.timer += deltaTime
        }
    
        if (this.frameX >= this.maxFrames) {
          this.frameX = 0
        }

        
      }
    
      draw(ctx) {
        
        ctx.drawImage(
          this.image,
          this.frameWidth * this.frameX,
          this.frameHeight * this.frameY,
          this.frameWidth,
          this.frameHeight,
          this.x,
          this.y,
          this.width * 3,
          this.height * 3,
        ) 
      }
    }