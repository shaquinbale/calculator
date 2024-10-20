let firstArgument = undefined;
let secondArgument = undefined;
let operator = undefined;
let display = '';
let firstArgumentLocked = false;
let decimalFlag = false;

function handleButtonPress(target) {
    let buttonClass = target.classList[0];
    let buttonId = target.id;

    switch (buttonClass) {
        case 'operand':
            handleOperand(buttonId);
            break
        case 'operator':
            handleOperator(buttonId);
            break
        case 'decimal':
            handleDecimal();
            break
        case 'equals':
            handleEquals();
            break
        case 'sign':
            handleSign();
            break
        case 'clear':
            handleClear();
            break
    }
}

function handleOperator(id) {
    if (firstArgument === undefined) return;
    if (operator != undefined) return;
    if (firstArgumentLocked === true && secondArgument != undefined) handleEquals();
    firstArgumentLocked ? handleEquals : firstArgumentLocked = true


    switch (id) {
        case 'add':
            operator = '+';
            break
        case 'subtract':
            operator = '-';
            break
        case 'multiply':
            operator = '*';
            break
        case 'divide':
            operator = '/';
            break
        case 'modulo':
            operator = '%';
            break
    }
}

function handleOperand(id) {
    number = parseFloat(id);

    if (operator === undefined) {
        firstArgument != undefined ? firstArgument = (firstArgument * 10) + number : firstArgument = firstArgument = number;
        display = number
    } else {
        secondArgument != undefined ? secondArgument = (secondArgument * 10) + number : secondArgument = secondArgument = number
        display = number
    }
}

function handleDecimal() {
    // add decimal functionality
}

function handleEquals() {
    if (firstArgument === undefined || secondArgument === undefined || operator === undefined) return;
    firstArg = parseFloat(firstArgument)
    secondArg = parseFloat(secondArgument)

    let result;
    switch (operator) {
        case '+':
            result = firstArg + secondArg;
            break;
        case '-':
            result = firstArg - secondArg;
            break;
        case '*':
            result = firstArg * secondArg;
            break;
        case '/':
            result = firstArg / secondArg;
            break;
        case '%':
            result = firstArg % secondArg;
            break;
    }
    display = result.toString();
    secondArgument = undefined;
    firstArgument = result;
}

function handleSign() {
    firstArgumentLocked ? secondArgument *= -1 : firstArgument *= -1;
    //add display change
}

function handleClear() {
    firstArgument = undefined;
    secondArgument = undefined;
    operator = undefined;
    display = '';
    firstArgumentLocked = false;
    decimalFlag = false;
}

const screen = document.querySelector('#screen')
const calculator = document.querySelector("#calculator")
calculator.addEventListener('click', event => {
    let target = event.target;
    handleButtonPress(target);

    screen.textContent = display;
})