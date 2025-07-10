"use strict";
/* eslint-disable quotes */
/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
// create variables num1 + operator + num2 + result
// basic math operators

// main calculator
function main() {
  let num1 = 0;
  let num2;
  let currentNum = 1;
  let operator;
  let activeOperator = false;
  let total;

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

  function storeNum(num) {
    if (currentNum === 1) {
      num1 = num;
    } else {
      num2 = num;
    }
  }

  function switchNum() {
    if (currentNum === 1) {
      currentNum = 2;
    } else {
      currentNum = 1;
    }
  }
  let digits = document.querySelectorAll(".digit");
  let display = document.getElementById("display");
  let operators = document.querySelectorAll(".operator");

  digits.forEach(function (e) {
    e.addEventListener("click", populateDisplay);
  });

  operators.forEach(function (e) {
    e.addEventListener("click", function () {
      if (!activeOperator === true) {
        operator = e.id;
        console.log(operator);
        switchNum();
        console.log(num1, num2, operator);
        activeOperator = true;
      }
    });
  });

  function operate(num1, operator, num2) {}
  function populateDisplay() {
    let num;
    if (activeOperator === true) {
      activeOperator = false;
    }
    if (display.textContent === "0") {
      display.textContent = this.textContent;
      num = Number(display.textContent);
      storeNum(num);
    } else {
      display.textContent += this.textContent;
      num = Number(display.textContent);
      storeNum(num);
    }
    return num;
  }
}
main();
