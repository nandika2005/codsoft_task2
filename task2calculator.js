let display = document.getElementById('display');
let operand1 = '';
let operand2 = '';
let operator = '';

function appendNumber(num) {
    display.innerText += num;
}

function setOperator(op) {
    operator = op;
    operand1 = display.innerText;
    display.innerText = '';
}

function clearDisplay() {
    display.innerText = '';
    operand1 = '';
    operand2 = '';
    operator = '';
}

function calculate() {
    operand2 = display.innerText;
    let result = '';
    switch(operator) {
        case '+':
            result = parseFloat(operand1) + parseFloat(operand2);
            break;
        case '-':
            result = parseFloat(operand1) - parseFloat(operand2);
            break;
        case '*':
            result = parseFloat(operand1) * parseFloat(operand2);
            break;
        case '/':
            result = parseFloat(operand1) / parseFloat(operand2);
            break;
        default:
            result = 'Error';
    }
    display.innerText = result;
}
