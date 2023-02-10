/**
* Index.js
* @author Alejandro De Jesús
*/

import { Paddle } from "../components/Paddle.js";

export class Index {
    constructor() {
        this.canvas = document.querySelector('canvas');
        this.player1 = new Paddle(this.canvas, 100, 100);
        this.player2 = new Paddle(this.canvas, 1180, 100);
        this.c = this.canvas.getContext('2d');
        this.setUpControllers();
        this.setView();
    }
    setView() {
        console.log('view set');
        this.canvas.width = 1280;
        this.canvas.height = 720;
        this.c.strokeStyle = 'white';
    }
    /**
     * Keyboard mapping
     * @param {string} p1up Player 1 up key
     * @param {string} p1down Player 1 down key
     * @param {string} p2up Player 2 up key
     * @param {string} p2down Player 2 down key
     */
    setUpControllers(p1up = 'w', p1down = 's', p2up = 'ArrowUp', p2down = 'ArrowDown') {
        this.player1.setControllers(p1up, p1down);
        this.player2.setControllers(p2up, p2down);
        document.addEventListener('keydown', event => {
            this.player1.move(event.key);
            this.player2.move(event.key);
        });
        document.addEventListener('keyup', event => {
            // this.player1.stopMove(event.key);
            // this.player2.move(event.key);
        })
    }
}

window.onload = () => {
    console.log('loaded');
    new Index();
    // const pong = new Index();
    // pong.startAnimation();
};