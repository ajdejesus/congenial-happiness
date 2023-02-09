/**
* Index.js
* @author Alejandro De Jesús
*/

import { appendChildren, setClass } from "../helpers/helpers.js";
import { div, p } from "../helpers/htmlElements.js";

export class Index {
    constructor() {
        this.root = document.getElementById('root');
        this.setView();
    }
    setView() {
        appendChildren(this.root, [
            setClass(p('Hello world'), 'index'), 
            setClass(p('Hello world'), 'index')
        ]);
        
    }
}

new Index();