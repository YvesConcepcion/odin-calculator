"use strict";
/* eslint-disable quotes */
/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
// create variables num1 + operator + num2 + result
// basic math operators

let num1;
let num2;
let operator;

function add(a, b) {
  console.log(a + b);
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
function operate(operator, a, b) {
  // Make the calculator work! You’ll need to store the first and second numbers input by the user and then operate() on them when the user presses the = button, according to the operator that was selected between the numbers.
}

let digits = document.querySelectorAll(".digit");
let display = document.getElementById("display");

digits.forEach(function (e) {
  e.addEventListener("click", populateDisplay);
});

function populateDisplay() {
  let num;
  if (display.textContent === "0") {
    display.textContent = this.textContent;
    num = Number(display.textContent);
  } else {
    display.textContent += this.textContent;
    num = Number(display.textContent);
  }
  return num;
}
