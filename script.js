function add(number1, number2){
    if(!number1) return number2;
    if(!number2) return number1;
    return number1 + number2;
}   

function subtract(number1, number2){
    if(!number1) return number2;
    if(!number2) return number1;
    return number1 - number2;
}

function multiply(number1, number2){
    if(!number1) return number2;
    if(!number2) return number1;
    return number1 * number2;
}

function divide(number1, number2){
    return number1 / number2;
}

function operate(number1, operator, number2){
    operator = "" + operator;
    if(operator === "+") return add(number1, number2);
    if(operator === "-") return subtract(number1, number2);
    if(operator === "*") return multiply(number1, number2);
    if(operator === "/") return divide(number1, number2);
}

const numbers = document.querySelectorAll('.keys div:not(.red, .grey, .green, .orange)');
const mainScreen = document.querySelector("#main-screen");
numbers.forEach(key => key.addEventListener('click', () => {
    if(mainScreen.textContent.length !== 12){
    mainScreen.textContent += key.textContent;
    }
}));

const clearButton = document.querySelector(".clear");
clearButton.addEventListener('click', () =>{
    mainScreen.textContent = "";
});

