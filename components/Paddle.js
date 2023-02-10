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
        this.controls = {
            up: {
                key: upKey,
                pressed: false
            },
            down: {
                key: downKey,
                pressed: false
            }
        }
    }
    getControllers() {
        return [this.controls.up.key, this.controls.down.key];
    }
    move(key) {
        if (this.getControllers().includes(key)) {
            if (key === this.controls.up.key) this.controls.up.pressed = true;
            // console.log('started move', this.x, this.y);
            // window.requestAnimationFrame(this.move);
            this.c.clearRect(this.x, this.y, this.width, this.height);
            if (key === this.controls.up.key) this.y -= 10;
            else if (key === this.controls.down.key) this.y += 10;
            this.setPosition();
        }
    }
}