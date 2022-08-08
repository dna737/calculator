function add(number1, number2){
    if(!number1) return number2;
    if(!number2) return number1;
    return +number1 + +number2;
}   

function subtract(number1, number2){
    if(!number1) return number2;
    if(!number2) return number1;
    return number1 - number2;
}

function multiply(number1, number2){
    if(!number1) return number2;
    if(!number2) return number1;
    return +number1 * +number2;
}

function divide(number1, number2){
    if(number2 === "0") return "roflmao"
    return number1 / number2;
}

function operate(number1, operator, number2){
    operator = "" + operator;
    if(operator === "+") return add(number1, number2);
    if(operator === "-") return subtract(number1, number2);
    if(operator === "x") return multiply(number1, number2);
    if(operator === "/") return divide(number1, number2);
}

const numbers = document.querySelectorAll('.keys div:not(.red, .grey, .green, .orange)');
const mainScreen = document.querySelector("#main-screen");
numbers.forEach(key => key.addEventListener('click', () => {
   

    if(mainScreen.textContent.length !== 12){
        if(mainScreen.textContent === "0" && key.textContent === "0"){
            mainScreen.textContent = "";
        }else{
        mainScreen.textContent += key.textContent;
        }
    }
}));



const decimalPoint = document.querySelector(".decimal");
decimalPoint.addEventListener('click', () => {
    if(!mainScreen.textContent.includes(".")){
        if(mainScreen.textContent.length === 0){
            mainScreen.textContent += "0";
        }
        mainScreen.textContent += ".";
    }else{
        //implement this later. Animate it in such a way that it jiggles left and right and makes an error sound.
    }
});

const backSpace = document.querySelector('.backspace');
backSpace.addEventListener('click', () => {
    mainScreen.textContent = mainScreen.textContent.substring(0, mainScreen.textContent.length-1);
});

const symbols = document.querySelectorAll('.symbol');
const calculation = document.querySelector('#calc-info');
symbols.forEach(symbol => symbol.addEventListener('click', () =>{
    if(mainScreen.textContent === ""){
        calculation.textContent = "0" + symbol.textContent;
    }
    
    else if (calculation.textContent === ""){
    calculation.textContent = mainScreen.textContent + symbol.textContent;
    mainScreen.textContent = "";
    }

    else if(calculation.textContent !== "" && mainScreen.textContent !== ""){
        calculation.textContent = operate(calculation.textContent.substring(0,calculation.textContent.length-1), calculation.textContent.substring(calculation.textContent.length-1),mainScreen.textContent) + symbol.textContent;
        mainScreen.textContent = "";
    }
}));

const equals = document.querySelector('.result');
equals.addEventListener('click', () =>{
    if(calculation.textContent !== "" && mainScreen.textContent !== ""){
        mainScreen.textContent = operate(calculation.textContent.substring(0,calculation.textContent.length-1), calculation.textContent.substring(calculation.textContent.length-1),mainScreen.textContent);
        calculation.textContent = "";
    }
});

const allClear = document.querySelector('.all-clear');
allClear.addEventListener('click',() => {
    calculation.textContent = "";
    mainScreen.textContent = "";
});

const negate = document.querySelector('.negate');
negate.addEventListener('click', () =>{
    if(mainScreen.textContent !== ""){
        if(mainScreen.textContent.charAt(0) === "-"){
            mainScreen.textContent = mainScreen.textContent.substring(1,mainScreen.textContent.length);
        }else{
            mainScreen.textContent = "-" + mainScreen.textContent;
        }
    }
});





