/**
* Paddle.js
* @author Alejandro De Jesús
*/

export class Paddle {
    constructor(canvas, x, y, width = 30, height = 200) {
        this.canvas = canvas;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.c = this.canvas.getContext('2d');
        this.setPosition();
    }
    setPosition() {
        this.c.beginPath();
        this.c.fillStyle = 'white';
        this.c.fillRect(this.x, this.y, this.width, this.height);
    }
    setControllers(upKey, downKey) {
        this.upKey = upKey;
        this.downKey = downKey;
    }
    getControllers() {
        return [this.upKey, this.downKey];
    }
    move(newY) {
        this.c.clearRect(this.x, this.y, this.width, this.height);
        this.y = newY;
        this.setPosition();
    }
}