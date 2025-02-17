import GameObject from "./GameObject"
import Projectile from "./Projectile"
import playerImage from "./assets/Cat.png"

export default class Player extends GameObject {
  constructor(x, y, width, heigth, color, speed, game) {
      super(x, y, width, heigth, color, speed, game);

      this.image = new Image();
      this.image.src = playerImage;

      this.game = game;

      this.speedX = 0;
      this.speedY = 0;
      this.maxSpeedX = 0.0000000000000000000000000001;
      this.maxSpeedY = 0.0000000000000000000000000001;
      this.jumpSpeed = 20;

      this.color = "255, 0, 0";

      this.frameWidth = 129;
      this.frameHeight = 129;
      this.frameX = 0;
      this.frameY = 0;

      this.flip = false;
      this.maxFrames = 7;

      this.fps = 8;
      this.timer = 0;
      this.interval = 1000 / this.fps;

      this.attackDelay = 0;
      this.attackInterval = 100;
      this.x = 570
  }

  update(deltaTime) {
      if (this.game.input.keys.has("ArrowLeft")) {
          console.log("pil vänster");
          this.speedX -= this.maxSpeedX;
      }
      if (this.game.input.keys.has("ArrowRight")) {
          this.speedX += this.maxSpeedX;
      }
      if (this.game.input.keys.has("ArrowUp")) {
        this.speedX += this.maxSpeedX;
    }
    if (this.game.input.keys.has("ArrowDown")) {
        this.speedX += this.maxSpeedX;
    }
     
      if (
          !this.game.input.keys.has("ArrowRight") &&
          !this.game.input.keys.has("ArrowLeft") &&
          !this.game.input.keys.has("ArrowUp") &&
          !this.game.input.keys.has("ArrowDown")
      ) {
          this.speedX = 0;
      }

      if (this.game.input.keys.has("ArrowUp")) {
          this.speedY = -this.maxSpeedY;
          
      }

      if (this.grounded) {
          this.speedY = 0;
      } else {
          this.speedY += 1;
      }

      this.y += this.speedY;
      this.x += this.speedX;

      if (this.speedX != 0) {
        this.frameY = 0; 
        this.maxFrames = 4;
    } else if (this.speedY != 0) {
        this.frameY = 1;
        this.maxFrames = 4;
    } else {
        this.frameY = 0; 
        this.maxFrames = 1;
    }
    

      if (this.y > 340) {
          this.y = 340;
          this.speedY = 0;
          this.grounded = true;
      }

      if (this.timer > this.interval) {
          this.frameX++;
          this.timer = 0;
      } else {
          this.timer += deltaTime;
      }

      if (this.frameX >= this.maxFrames) {
          this.frameX = 0;
      }
      if (this.attackDelay > 0) {
          this.attackDelay -= deltaTime;
      }
  }

  attack() {
      if (this.attackDelay > 0) return;

      this.attackDelay = this.attackInterval;

      this.game.projectiles.push(
          new Projectile(
              this.game,
              this.x + this.width / 2 - 2,
              this.y,
              4,
              4
          )
      );
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
          this.height * 3
      );
  }
}
