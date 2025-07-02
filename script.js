"use strict";
/* eslint-disable quotes */
/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
// create variables num1 + operator + num2 + result
// basic math operators

function operate(num1, num2, operate) {
  function add(a, b) {
    return a + b;
  }
  function subtract(a, b) {
    return a - b;
  }
  function multiply(a, b) {
    return a * b;
  }
  function divide(a, b) {
    return a / b;
  }
}
// let function = operate() {//
let digits = document.querySelectorAll(".digit");
let display = document.getElementById("display");
let add = document.getElementById("add");

digits.forEach(function (e) {
  e.addEventListener("click", populateDisplay);
});

//if operator is pressed + = -

// add.addEventListener("click",function(){

// });

function populateDisplay() {
  if (display.textContent === "0") display.textContent = this.textContent;
  else {
    display.textContent += this.textContent;
  }
}
