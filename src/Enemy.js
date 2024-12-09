import GameObject from "./GameObject"

export default class Enemy extends GameObject {
    constructor(x, y, width, heigth, color, speed, game) {
        super(x, y, width, heigth, color, speed, game);
  
        this.image = new Image();
        this.image.src = "./src/assets/Cat.png";
  
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
}