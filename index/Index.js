/**
* Index.js
* @author Alejandro De Jesús
*/

import { Paddle } from "../components/Paddle.js";
import { appendChildren, setClass } from "../helpers/helpers.js";
import { div, p } from "../helpers/htmlElements.js";

export class Index {
    constructor() {
        this.root = document.getElementById('root');
        this.canvas = document.querySelector('canvas');
        this.c = this.canvas.getContext('2d');
        this.setView();
    }
    setView() {
        this.canvas.width = 1280;
        this.canvas.height = 720;
        this.c.strokeStyle = 'white';
        this.player1 = new Paddle(this.canvas, 100, 100);
        this.player2 = new Paddle(this.canvas, 1180, 100);

        this.player1.setControllers('w', 's');
        this.player2.setControllers('ArrowUp', 'ArrowDown');

        document.addEventListener('keydown', event => {
            if (this.player1.getControllers().includes(event.key)) {
                this.player1.move(event.key == this.player1.upKey ? this.player1.y - 10 : this.player1.y + 10);
            } else if (this.player2.getControllers().includes(event.key)) {
                this.player2.move(event.key == this.player2.upKey ? this.player2.y - 10 : this.player2.y + 10)
            }
        });
    }
}

window.onload = () => new Index();