/*
* This file already covered both level 14 & 15
*/

// setup DOM (document object model)
var numberScreen = 'screen';
var numBtns = document.getElementsByClassName('number');
var operators = document.getElementsByClassName('operator');

var operating = false;
var operand = '';

// clear content from the screen
function clearScreen() {
    document.getElementById(numberScreen).innerHTML = "0";
    resetOperating();
}

function evaluate() {
    var result;

    if (operating && isLastEnteredNumber()) {
        var content = document.getElementById(numberScreen).innerHTML;
        var numbers = content.split(operand);

        //    parse string to be able to operate
        //    first value input
        var firstNumber = parseInt(numbers[0], 10);
        //    second value input to operate
        var secondNumber = parseInt(numbers[1], 10);

        // switch case for operate number
        switch (operand) {
            case '+':
                result = firstNumber + secondNumber;
                break;
            case '÷': //use &divide on html
                if (firstNumber !== 0 && secondNumber !== 0) {
                    result = firstNumber / secondNumber;
                } else {
                    result = 0;
                }
                break;
            case '×': //use &time on html
                result = firstNumber * secondNumber;
                break;
            case '-':
                result = firstNumber - secondNumber;
                break;
            case "%":
                result = firstNumber % secondNumber;
                break;
            default:
                console.log('Something wrong!' + operand + ' is not supported');
        }
    }
    resetOperating();
    document.getElementById(numberScreen).innerHTML = result || 0;
    return result || 0;
}

// add decimal
function decimal() {
    document.getElementById(numberScreen).innerHTML += ".";
}

// reset operating
function resetOperating() {
    operating = false;
    operand = '';
}

function isLastEnteredNumber() {
    var content = document.getElementById(numberScreen).innerHTML;
    return !isNaN(content.charAt(content.length - 1));
}

// force to displaying 0 when no operating
function numberClick(event) {
    var content = document.getElementById(numberScreen).innerHTML;
    var btnNum = event.target.innerHTML;

    if (content != "0") {
        content += btnNum;
    } else {
        content = btnNum;
    }
    document.getElementById(numberScreen).innerHTML = content;
}

// function called when operator button pressed
function operatorClick(event) {
    var operator = event.target.innerHTML;
    var content = document.getElementById(numberScreen).innerHTML;

    switch (operator) {
        case '=':
            evaluate();
            break;
        case 'C':
            clearScreen();
            break;
        case '.':
            decimal();
            break;
        default:
            operating = true;
            operand = operator;
            content += operator;
            document.getElementById(numberScreen).innerHTML = content;
            break;
    }
}

// this function to tell operator btn clicked
for (var o = 0; o < operators.length; o++) {
    operators[o].addEventListener('click', operatorClick, false);
}

// this function to tell number btn clicked
for (var b = 0; b < numBtns.length; b++) {
    numBtns[b].addEventListener('click', numberClick, false);
}

clearScreen();