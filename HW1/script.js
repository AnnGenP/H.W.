let firstNumber = parseFloat(prompt("What's your first number?"));
let secondNumber = parseFloat(prompt("What's your second number?"));

let sum = firstNumber + secondNumber;
let subtraction = firstNumber - secondNumber;
let multiplication = firstNumber * secondNumber;
let division = firstNumber / secondNumber;

alert(
  `${firstNumber} + ${secondNumber} = ${sum}\n` +
  `${firstNumber} - ${secondNumber} = ${subtraction}\n` +
  `${firstNumber} * ${secondNumber} = ${multiplication}\n` +
  `${firstNumber} / ${secondNumber} = ${division}`
);
