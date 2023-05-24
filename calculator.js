let result = document.getElementById("result");
let clearButton = document.getElementById("clear");
let openParenButton = document.getElementById("open-paren");
let closeParenButton = document.getElementById("close-paren");
let backspaceButton = document.getElementById("backspace");
let sevenButton = document.getElementById("seven");
let eightButton = document.getElementById("eight");
let nineButton = document.getElementById("nine");
let divideButton = document.getElementById("divide");
let fourButton = document.getElementById("four");
let fiveButton = document.getElementById("five");
let sixButton = document.getElementById("six");
let multiplyButton = document.getElementById("multiply");
let oneButton = document.getElementById("one");
let twoButton = document.getElementById("two");
let threeButton = document.getElementById("three");
let subtractButton = document.getElementById("subtract");
let zeroButton = document.getElementById("zero");
let decimalButton = document.getElementById("decimal");
let equalsButton = document.getElementById("equals");
let addButton = document.getElementById("add");

clearButton.addEventListener("click", clearResult);
openParenButton.addEventListener("click", function() { insertValue('(') });
closeParenButton.addEventListener("click", function() { insertValue(')') });
backspaceButton.addEventListener("click", backspace);
sevenButton.addEventListener("click", function() { insertValue('7') });
eightButton.addEventListener("click", function() { insertValue('8') });
nineButton.addEventListener("click", function() { insertValue('9') });
divideButton.addEventListener("click", function() { insertValue('/') });
fourButton.addEventListener("click", function() { insertValue('4') });
fiveButton.addEventListener("click", function() { insertValue('5') });
sixButton.addEventListener("click", function() { insertValue('6') });
multiplyButton.addEventListener("click", function() { insertValue('*') });
oneButton.addEventListener("click", function() { insertValue('1') });
twoButton.addEventListener("click", function() { insertValue('2') });
threeButton.addEventListener("click", function() { insertValue('3') });
subtractButton.addEventListener("click", function() { insertValue('-') });
zeroButton.addEventListener("click", function() { insertValue('0') });
decimalButton.addEventListener("click", function() { insertValue('.') });
equalsButton.addEventListener("click", calculate);
addButton.addEventListener("click", function() { insertValue('+') });
function insertValue(value) {
  result.value += value;
}

function clearResult() {
  result.value = "";
}

function backspace() {
  result.value = result.value.slice(0, -1);
}

function calculate() {
  try {
    result.value = eval(result.value);
  } catch (error) {
    result.value = "Error";
  }
}

document.addEventListener('DOMContentLoaded', function() {
  var themeSelector = document.getElementById('theme-selector');
  
  themeSelector.addEventListener('change', function() {
    var calculators = document.getElementsByClassName('calculator'); // Get all elements with the 'calculator' class
    var buttons = document.getElementsByTagName('button'); // Get all button elements

    // Remove the existing theme class from the body, calculators, and buttons
    document.body.classList.remove('theme-default', 'theme-dark', 'theme-light');
    for (var i = 0; i < calculators.length; i++) {
        calculators[i].classList.remove('theme-default', 'theme-dark', 'theme-light');
    }
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('theme-default', 'theme-dark', 'theme-light');
    }

    // Add the selected theme class to the body, calculators, and buttons
    document.body.classList.add(this.value);
    for (var i = 0; i < calculators.length; i++) {
        calculators[i].classList.add(this.value);
    }
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.add(this.value);
    }

    // Save the selected theme in local storage
    localStorage.setItem('selectedTheme', this.value);
  });

  // Load the saved theme from local storage (if any)
  var savedTheme = localStorage.getItem('selectedTheme');
  if (savedTheme) {
    var calculators = document.getElementsByClassName('calculator'); // Get all elements with the 'calculator' class
    var buttons = document.getElementsByTagName('button'); // Get all button elements

    // Remove the existing theme class from the body, calculators, and buttons
    document.body.classList.remove('theme-default', 'theme-dark', 'theme-light');
    for (var i = 0; i < calculators.length; i++) {
        calculators[i].classList.remove('theme-default', 'theme-dark', 'theme-light');
    }
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('theme-default', 'theme-dark', 'theme-light');
    }

    // Add the saved theme class to the body, calculators, and buttons
    document.body.classList.add(savedTheme);
    for (var i = 0; i < calculators.length; i++) {
        calculators[i].classList.add(savedTheme);
    }
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.add(savedTheme);
    }

    // Set the dropdown menu's value to the saved theme
    themeSelector.value = savedTheme;
  }
});
