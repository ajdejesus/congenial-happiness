/**
* Paddle.js
* @author Alejandro De Jesús
*/

export class Paddle {
    constructor(width, height, color, x, y, gravity) {
        this.canvas = document.querySelector("#canvas");
        this.c = canvas.getContext("2d");
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.c.fillStyle = color
        this.gravity = gravity;
        this.c.fillRect(this.x, this.y, this.width, this.height);
    }
    }
      



