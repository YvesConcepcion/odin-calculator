/* eslint-disable quotes */
/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
// create variables num1 + operator + num2 + result
// basic math operators
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
// variables
let num1;
let num2;
let operator;

// let function = operate() {//
const digit = document.getElementById("digit");
// create function to populate display and store variable
function displayDigit() {
  // document.getElementById("digit").innerText = "test";
  // console.log("test");
  alert("test");
}
digit.addEventListener("click", displayDigit);
