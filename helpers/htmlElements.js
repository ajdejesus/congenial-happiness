/**
 * Functions that create HTML elements
 */

import { appendChildren } from "./helpers.js";

/**
 * Creates div tag
 * @returns div tag
 */
export function div() {
    return document.createElement('div')
}
/**
 * Creates p tag with text inside it
 * @param {string} text 
 * @returns p tag with appended text
 */
export function p(text) {
    const node = document.createElement('p');
    const textNode = document.createTextNode(text);
    return appendChildren(node, [textNode]);
}