/**
* Index.js
* @author Alejandro De Jesús
*/
import { Paddle } from "../components/Paddle.js";

class Pong{
    constructor(){
        this.canvas = document.querySelector("#canvas");
        this.c = canvas.getContext("2d");
        this.scoreOne = 0;
        this.scoreTwo = 0;
        this.canvasSize();
        this.elements();
        this.displayScoreOne();
    }
    canvasSize(){
        this.canvas.height = 720;
        this.canvas.width = 1280;
        
    }
    elements(){
        this.playerOne = new Paddle(20, 150, "white", 100, 250, 2);
        this.playerTwo = new Paddle(20, 150, "white", 1100, 250, 2);
        this.ball = new Paddle (15, 15, "red", 1280 /2, 720 /2, 2);
    }
    displayScoreOne(){
        this.c.font = "18px Arial"
        this.c.fillStyle = "white";
        this.c.fillText(scoreOne, canvas.width/2 - 60, 30)
    }
    displayScoreTwo(){
        this.c.font = "18px Arial"
        this.c.fillStyle = "white";
        this.c.fillText(scoreOne, canvas.width/2 + 60, 30)
    }
  
}


window.onload = () => new Pong();


