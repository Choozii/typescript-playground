"use strict";
var btn = document.getElementById("btn");
var input = document.getElementById("input");
var form = document.querySelector('form');
function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
}
form === null || form === void 0 ? void 0 : form.addEventListener('submit', handleSubmit);
