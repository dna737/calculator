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

function operator(number1, operator, number2){
    if(operator === "+") add(number1, number2);
    if(operator === "-") subtract(number1, number2);
    if(operator === "*") multiply(number1, number2);
    if(operator === "/") divide(number1, number2);
}

