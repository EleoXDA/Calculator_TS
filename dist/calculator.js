"use strict";
const result = document.getElementById("result");
const clearButton = document.getElementById("clear");
const openParenButton = document.getElementById("open-paren");
const closeParenButton = document.getElementById("close-paren");
const backspaceButton = document.getElementById("backspace");
const sevenButton = document.getElementById("seven");
const eightButton = document.getElementById("eight");
const nineButton = document.getElementById("nine");
const divideButton = document.getElementById("divide");
const fourButton = document.getElementById("four");
const fiveButton = document.getElementById("five");
const sixButton = document.getElementById("six");
const multiplyButton = document.getElementById("multiply");
const oneButton = document.getElementById("one");
const twoButton = document.getElementById("two");
const threeButton = document.getElementById("three");
const subtractButton = document.getElementById("subtract");
const zeroButton = document.getElementById("zero");
const decimalButton = document.getElementById("decimal");
const equalsButton = document.getElementById("equals");
const addButton = document.getElementById("add");
clearButton.addEventListener("click", clearResult);
clearButton.addEventListener("click", clearResult);
openParenButton.addEventListener("click", function () { insertValue('('); });
closeParenButton.addEventListener("click", function () { insertValue(')'); });
backspaceButton.addEventListener("click", backspace);
sevenButton.addEventListener("click", function () { insertValue('7'); });
eightButton.addEventListener("click", function () { insertValue('8'); });
nineButton.addEventListener("click", function () { insertValue('9'); });
divideButton.addEventListener("click", function () { insertValue('/'); });
fourButton.addEventListener("click", function () { insertValue('4'); });
fiveButton.addEventListener("click", function () { insertValue('5'); });
sixButton.addEventListener("click", function () { insertValue('6'); });
multiplyButton.addEventListener("click", function () { insertValue('*'); });
oneButton.addEventListener("click", function () { insertValue('1'); });
twoButton.addEventListener("click", function () { insertValue('2'); });
threeButton.addEventListener("click", function () { insertValue('3'); });
subtractButton.addEventListener("click", function () { insertValue('-'); });
zeroButton.addEventListener("click", function () { insertValue('0'); });
decimalButton.addEventListener("click", function () { insertValue('.'); });
equalsButton.addEventListener("click", calculate);
addButton.addEventListener("click", function () { insertValue('+'); });
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
        result.value = eval(result.value).toString();
    }
    catch (error) {
        result.value = "Error";
    }
}
document.addEventListener('DOMContentLoaded', function () {
    const themeSelector = document.getElementById('theme-selector');
    themeSelector.addEventListener('change', function () {
        const calculators = document.getElementsByClassName('calculator');
        const buttons = document.getElementsByTagName('button');
        document.body.classList.remove('theme-default', 'theme-dark', 'theme-light');
        for (let i = 0; i < calculators.length; i++) {
            calculators[i].classList.remove('theme-default', 'theme-dark', 'theme-light');
        }
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove('theme-default', 'theme-dark', 'theme-light');
        }
        document.body.classList.add(themeSelector.value);
        for (let i = 0; i < calculators.length; i++) {
            calculators[i].classList.add(themeSelector.value);
        }
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.add(themeSelector.value);
        }
        localStorage.setItem('selectedTheme', themeSelector.value);
    });
    const savedTheme = localStorage.getItem('selectedTheme');
    if (savedTheme) {
        const calculators = document.getElementsByClassName('calculator');
        const buttons = document.getElementsByTagName('button');
        document.body.classList.remove('theme-default', 'theme-dark', 'theme-light');
        for (let i = 0; i < calculators.length; i++) {
            calculators[i].classList.remove('theme-default', 'theme-dark', 'theme-light');
        }
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove('theme-default', 'theme-dark', 'theme-light');
        }
        document.body.classList.add(savedTheme);
        for (let i = 0; i < calculators.length; i++) {
            calculators[i].classList.add(savedTheme);
        }
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.add(savedTheme);
        }
        themeSelector.value = savedTheme;
    }
});
