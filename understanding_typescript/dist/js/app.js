"use strict";
var button = document.querySelector('button');
function add(n1, n2) {
    if (n1 + n2 > 0) {
        return n1 + n2;
    }
    return;
}
function clickHandler(message) {
    // let userName: string = 'Max';
    console.log("click: " + message);
}
button.addEventListener('click', clickHandler.bind(null, "click"));
