const one = document.querySelector(".btnOne");
const two = document.querySelector(".btnTwo");
const three = document.querySelector(".btnThree");
const four = document.querySelector(".btnFour");
const five = document.querySelector(".btnFive");
const six = document.querySelector(".btnSix");
const seven = document.querySelector(".btnSeven");
const eight = document.querySelector(".btnEight");
const nine = document.querySelector(".btnNine");
const zero = document.querySelector(".btnZero");
const point = document.querySelector(".btnPoint");

const clear = document.querySelector(".btnClear");
const equal = document.querySelector(".btnEqual");

const plus = document.querySelector(".btnPlus");
const minus = document.querySelector(".btnSub");
const multiply = document.querySelector(".btnMult");
const divide = document.querySelector(".btnDiv");

let operator = "+";
let numString = "";
let prepareNewNum = false;

let entryOne = 0;
let entryTwo = 0; 

const display = document.querySelector(".display");


function UpdateDisplay(value) {
  display.textContent = value;
}

function OperateNumbers(num1,num2,operator){
  switch (operator) {
    case "+":
      return num1 + num2;
      break;
    case "-":
      return num1 - num2;
      break;
    case "/":
      return num1 / num2;
      break;
    case "*":
      return num1 * num2;
      break;
    default:
      return 0;
      break;
  }
}

one.addEventListener("click", () => {
  if(prepareNewNum){
    numString = ""
    prepareNewNum = false;
  }
  if (numString.length < 15) {
    numString += "1";
  }
  UpdateDisplay(numString);
});
two.addEventListener("click", () => {
  if (prepareNewNum) {
    numString = "";
    prepareNewNum = false;
  }
  if (numString.length < 15) {
    numString += "2";
  }
  UpdateDisplay(numString);
});
three.addEventListener("click", () => {
  if (prepareNewNum) {
    numString = "";
    prepareNewNum = false;
  }
  if (numString.length < 15) {
    numString += "3";
  }
  UpdateDisplay(numString);
});
four.addEventListener("click", () => {
  if (prepareNewNum) {
    numString = "";
    prepareNewNum = false;
  }
  if (numString.length < 15) {
    numString += "4";
  }
  UpdateDisplay(numString);
});
five.addEventListener("click", () => {
  if (prepareNewNum) {
    numString = "";
    prepareNewNum = false;
  }
  if (numString.length < 15) {
    numString += "5";
  }
  UpdateDisplay(numString);
});
six.addEventListener("click", () => {
  if (prepareNewNum) {
    numString = "";
    prepareNewNum = false;
  }
  if (numString.length < 15) {
    numString += "6";
  }
  UpdateDisplay(numString);
});
seven.addEventListener("click", () => {
  if (prepareNewNum) {
    numString = "";
    prepareNewNum = false;
  }
  if (numString.length < 15) {
    numString += "7";
  }
  UpdateDisplay(numString);
});
eight.addEventListener("click", () => {
  if (prepareNewNum) {
    numString = "";
    prepareNewNum = false;
  }
  if (numString.length < 15) {
    numString += "8";
  }
  UpdateDisplay(numString);
});
nine.addEventListener("click", () => {
  if (prepareNewNum) {
    numString = "";
    prepareNewNum = false;
  }
  if (numString.length < 15) {
    numString += "9";
  }
  UpdateDisplay(numString);
});
zero.addEventListener("click", () => {
  if (prepareNewNum) {
    numString = "";
    prepareNewNum = false;
  }
  if (numString.length < 15) {
    numString += "0";
  }
  UpdateDisplay(numString);
});
point.addEventListener("click", () => {
  if (prepareNewNum) {
    numString = "";
    prepareNewNum = false;
  }
  if (numString.length < 15 && !numString.includes(".")) {
    numString += ".";
  }
  UpdateDisplay(numString);
});

clear.addEventListener("click", () => {
  numString = "";
  UpdateDisplay(numString);
});

plus.addEventListener("click", () => {
  entryOne = +numString;
  prepareNewNum = true;
  operator = "+";
  UpdateDisplay(numString);
});

minus.addEventListener("click", () => {
  entryOne = +numString;
  prepareNewNum = true;
  operator = "-";
  UpdateDisplay(numString);
});

multiply.addEventListener("click", () => {
  entryOne = +numString;
  prepareNewNum = true;
  operator = "*";
  UpdateDisplay(numString);
});

divide.addEventListener("click", () => {
  entryOne = +numString;
  prepareNewNum = true;
  operator = "/";
  UpdateDisplay(numString);
});

equal.addEventListener("click", () => {
  entryTwo = +numString;
  numString = OperateNumbers(entryOne, entryTwo, operator);
  while (numString.length > 15) {
    numString[numString.length-1] = '';
  }
  UpdateDisplay(numString);
});
