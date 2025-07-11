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

  function storeNum(num) {
    if (currentNum === 1) {
      return (num1 = num);
    } else {
      return (num2 = num);
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
  const operators = document.querySelectorAll(".operator");
  const equal = document.getElementById("equal");

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
        return operator;
      }
    });
  });

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

  function operate(a, b, op) {
    if (operator === "add") {
      display.textContent = add(num1, num2);
    } else if (operator === "subtract") {
      display.textContent = subtract(num1, num2);
    } else if (operator === "multiply") {
      display.textContent = multiply(num1, num2);
    } else if (operator === "divide") {
      display.textContent = multiply(num1, num2);
    }
  }
  equal.addEventListener("click", operate);

  function populateDisplay() {
    if (activeOperator === true) {
      display.textContent = this.textContent;
      activeOperator = false;
      return;
    }
    if (display.textContent === "0") {
      display.textContent = this.textContent;
    } else {
      display.textContent += this.textContent;
    }
    const currentValue = Number(display.textContent);

    if (currentNum === 1) {
      num1 = currentValue;
      storeNum(num1);
    } else if (currentNum === 2) {
      num2 = currentValue;
      storeNum(num2);
    }
  }
}
main();
