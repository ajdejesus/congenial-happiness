/**
 * Helper functions
 */

/**
 * Appends children array to parent 
 * @param {node} parent 
 * @param {array} children 
 * @returns parent node with appended children
 */
export function appendChildren(parent, children) {
    children.forEach(child => parent.appendChild(child));
    return parent;
}
/**
 * Adds class to html element
 * @param {node} node 
 * @param {string} className 
 * @returns node with class name
 */
export function setClass(node, className) {
    node.classList.add(className);
    return node;
}