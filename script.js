function add(number1, number2){
    if(!number1) return number2;
    if(!number2) return number1;
    let string1 = number1.substring(number1.indexOf("."));
    let string2 = number2.substring(number2.indexOf("."));
    let maximum = Math.max(string1.length, string2.length);
    return (+number1 + +number2).toFixed(maximum-1);
}   

function subtract(number1, number2){
    if(!number1) return number2;
    if(!number2) return number1;
    let string1 = number1.substring(number1.indexOf("."));
    let string2 = number2.substring(number2.indexOf("."));
    let maximum = Math.max(string1.length, string2.length);
    return (number1 - number2).toFixed(maximum-1);
}

function multiply(number1, number2){
    if(!number1) return number2;
    if(!number2) return number1;
    let string1 = number1.substring(number1.indexOf("."));
    let string2 = number2.substring(number2.indexOf("."));
    let maximum = Math.max(string1.length, string2.length);
    return (+number1 * +number2).toFixed(maximum-1);
}

function divide(number1, number2){
    if(number2 === "0") return "roflmao"
    let string1 = number1.substring(number1.indexOf("."));
    let string2 = number2.substring(number2.indexOf("."));
    let maximum = Math.max(string1.length, string2.length);
    return (number1 / number2).toFixed(maximum-1);
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
            mainScreen.textContent += "";
        }else{
            if(mainScreen.textContent === "0"){
                mainScreen.textContent = key.textContent;
            }else{
                mainScreen.textContent += key.textContent;
            }
        }
    }
}));

//keyboard support for numbers:
window.addEventListener('keydown', (event) => {
    if(event.key === "0" || event.key === "1" || event.key === "2" || event.key === "3"|| event.key === "4"|| event.key === "5"|| event.key === "6"|| event.key === "7"|| event.key === "8"|| event.key === "9"){
        const numbers = document.querySelectorAll('.keys div:not(.red, .grey, .green, .orange)');
        numbers.forEach(number => {
            if(event.key === number.textContent){
                number.classList.toggle('toggled-numbers');
                if(mainScreen.textContent.length !== 12){
                    if(mainScreen.textContent === "0" && event.key === "0"){
                        mainScreen.textContent += "";
                    }else{
                        number.classList.toggle('toggled-numbers');
                        if(mainScreen.textContent === "0"){
                            mainScreen.textContent = event.key;
                        }else{
                            mainScreen.textContent += event.key;
                        }
                    }
                }
            }
        })
    }
});

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

//keyboard support for decimal point:
window.addEventListener('keydown', (event) =>{
    if(event.key === "."){
    if(!mainScreen.textContent.includes(".")){
        if(mainScreen.textContent.length === 0){
            mainScreen.textContent += "0";
        }
        mainScreen.textContent += ".";
    }
}
});

const backSpace = document.querySelector('.backspace');
backSpace.addEventListener('click', () => {
    mainScreen.textContent = mainScreen.textContent.substring(0, mainScreen.textContent.length-1);
});

const symbols = document.querySelectorAll('.symbol');
const calculation = document.querySelector('#calc-info');
symbols.forEach(symbol => symbol.addEventListener('click', () =>{
    let tempString = mainScreen.textContent;
    if(!calculation.textContent.includes("=")){
    if(mainScreen.textContent === "" && calculation.textContent === ""){
        calculation.textContent = "0" + symbol.textContent;
    }

    else if(calculation.textContent !== "" && mainScreen.textContent === ""){
        calculation.textContent = calculation.textContent.substring(0, calculation.textContent.length-1) + symbol.textContent;
    }

    //special case of "-+" to avoid NaN cases:
    else if(mainScreen.textContent === "-"){
        calculation.textContent = "0" + symbol.textContent;
        mainScreen.textContent = "";
    }
    
    else if (calculation.textContent === ""){
    calculation.textContent = mainScreen.textContent + symbol.textContent;
    mainScreen.textContent = "";
    }

    else if(calculation.textContent !== "" && mainScreen.textContent !== ""){
        calculation.textContent = operate(calculation.textContent.substring(0,calculation.textContent.length-1), calculation.textContent.substring(calculation.textContent.length-1),mainScreen.textContent) + symbol.textContent;
        mainScreen.textContent = "";
    }
}else{
    //this means that "=" is included in the calculation area.
    calculation.textContent = mainScreen.textContent + symbol.textContent;
    mainScreen.textContent = "";
}
}));



const equals = document.querySelector('.result');
equals.addEventListener('click', () =>{
    let tempString = mainScreen.textContent;
    if(calculation.textContent !== "" && mainScreen.textContent !== "" && !calculation.textContent.includes("=")){
        mainScreen.textContent = operate(calculation.textContent.substring(0,calculation.textContent.length-1), calculation.textContent.substring(calculation.textContent.length-1),mainScreen.textContent);
        calculation.textContent += tempString + "=";
    }

    if(calculation.textContent !== "" && !calculation.textContent.includes("=") && mainScreen.textContent === ""){
        mainScreen.textContent = calculation.textContent.substring(0, calculation.textContent.length-1);
        calculation.textContent = "";
    }

    if(calculation.textContent.includes("=")){
        mainScreen.textContent += "";
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

const percentage = document.querySelector('.weird-symbol');
percentage.addEventListener('click', () =>{
    if(calculation.textContent !== "" && mainScreen.textContent !== ""){
        let result = calculation.textContent.substring(0, calculation.textContent.length-1)/100;
        result *= mainScreen.textContent;
        mainScreen.textContent = operate(calculation.textContent.substring(0, calculation.textContent.length-1), calculation.textContent.substring(calculation.textContent.length-1),result);
        calculation.textContent += result + "=";
    }
    else if(calculation.textContent === "" && mainScreen.textContent !== ""){
        calculation.textContent = mainScreen.textContent + "%=";
        mainScreen.textContent /= 100;
    }
});





