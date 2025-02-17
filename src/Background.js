import GameObject from "./GameObject";
import floorImage  from "./assets/Floor.png"

export default class Background extends GameObject {
  constructor(x, y, width, height, color, speed, game) {
    super(x, y, width, height, color, speed, game);

    this.image = new Image();
    this.image.src = floorImage;

    this.speedX = 0;
    this.speedY = 0;
    this.maxSpeedY = 0.4
    

    this.frameWidth = width;
    this.frameHeight = height;
    this.game = game;
  }

  update(deltaTime) {
    if (this.game.input.keys.has("ArrowRight")) {
      this.speedX = -this.maxSpeedY;
    } else if (this.game.input.keys.has("ArrowLeft")) {
      this.speedX = this.maxSpeedY;
    } else {
      this.speedX = 0;
    }

    if (this.game.input.keys.has("ArrowUp")) {
      this.speedY = this.maxSpeedY;
    } else if (this.game.input.keys.has("ArrowDown")) {
      this.speedY = -this.maxSpeedY;
    } else {
      this.speedY = 0;
    }

    this.x += this.speedX * deltaTime;
    this.y += this.speedY * deltaTime;

    this.x %= this.frameWidth;
    this.y %= this.frameHeight;
  }

  draw(ctx) {
    for (let row = -1; row <= 1; row++) {
      for (let col = -1; col <= 1; col++) {
        ctx.drawImage(
          this.image,
          0,
          0,
          this.frameWidth,
          this.frameHeight,
          this.x + col * this.frameWidth,
          this.y + row * this.frameHeight,
          this.frameWidth,
          this.frameHeight
        );
      }
    }
  }
}
