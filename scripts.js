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
    firstArgumentLocked ? handleEquals : firstArgumentLocked = true


    switch (id) {
        case 'add':
            operator = '+';
            display += '+'
            break
        case 'subtract':
            operator = '-';
            display += '-'
            break
        case 'multiply':
            operator = '*';
            display += '*'
            break
        case 'divide':
            operator = '/';
            display += '/'
            break
        case 'modulo':
            operator = '%';
            display += '%'
            break
    }
}

function handleOperand(id) {
    number = parseFloat(id);

    if (operator === undefined) {
        firstArgument != undefined ? firstArgument = (firstArgument * 10) + number : firstArgument = firstArgument = number;
        display += number
    } else {
        secondArgument != undefined ? secondArgument = (secondArgument * 10) + number : secondArgument = secondArgument = number
        display += number
    }
}

function handleDecimal() {
    
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
    // add display change
}

function handleClear() {
    
}
const firstCounter = document.querySelector(".firstarg")
const secondCounter = document.querySelector(".secondarg")

const screen = document.querySelector('#screen')
const calculator = document.querySelector("#calculator")
calculator.addEventListener('click', event => {
    let target = event.target;
    handleButtonPress(target);

    screen.textContent = display;
    firstCounter.textContent = `first arg is ${firstArgument}`;
    secondCounter.textContent = ` second arg is ${secondArgument}`;
})