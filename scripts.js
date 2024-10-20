let firstArgument = 0;
let secondArguemnt = 0
let operator = '';
let display = '';
let argumentOneLocked = false;
let decimalFlag = false;

const calculator = document.querySelector("#calculator")
calculator.addEventListener('click', event => {
    let target = event.target;

    alert(target.classList[0]);
})