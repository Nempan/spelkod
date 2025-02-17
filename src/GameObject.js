import enemyImage from "./assets/orc1.png"

export default class GameObject {
    constructor( x, y, width, height, color, speed, game){
        this.height = height
        this.width = width
        this.x = x
        this.y = y
        this.color = color
        this.speed = speed

        this.image = new Image();
        this.image.src = enemyImage;

        
        this.frameWidth = 65;
        this.frameHeight = 65;
        this.frameX = 0;
        this.frameY = 0;

        this.flip = false;
      this.maxFrames = 7;

        this.x = 570
        this.y = 570

        this.speedX = 1;
      this.speedY = 1;
      this.maxSpeedX = 1;
      this.maxSpeedY = 1;

      this.fps = 8;
      this.timer = 0;
      this.interval = 1000 / this.fps;

    }


    update(deltaTime){

        if(this.x < 570){
            this.x += this.speedX
        }
        if(this.x > 570){
            this.x -= this.speedX
        }
        if(this.y < 350){
            this.y += this.speedY
        }
        if(this.y > 350){
            this.y -= this.speedY
        }

     
      
        


    }


    draw(ctx){
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

