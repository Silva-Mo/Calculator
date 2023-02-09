
const nums = document.querySelectorAll('.num');
const operationDiv = document.querySelector('.operation');
const resultDiv = document.querySelector('.result');
const allBtns = document.querySelectorAll('.btn');
const addBtn = document.querySelector('.add');
const subtractBtn = document.querySelector('.subtract');
const multiplyBtn = document.querySelector('.multiply');
const divisionBtn = document.querySelector('.division');
const modulusBtn = document.querySelector('.modulus');
const powerBtn = document.querySelector('.power');
const equalBtn = document.querySelector('.equal');
const allOperators = document.querySelectorAll('.operator');
const backspace = document.querySelector('.backspace');

let numClicked;
let num1 = "";
let num2 = "";
let operator = "";
let num1Flag = true;
let operatorFlage = true;
let result;
let operaterAcc = true;
let deletedNum1 = true;

nums.forEach((num) => {
    num.addEventListener('click', () => {
        if (operatorFlage === true) {
            if (num1Flag === true) {
                
                    if (num.textContent === '.') {
                        operationDiv.textContent += '.';
                        num1 += ".";
                    }
                    else {
                        numClicked = num.textContent;
                        console.log(numClicked);
                        operationDiv.textContent += numClicked;
                        num1 += +numClicked;
                    }

                
            }
            else if (num1Flag === false) {
                if (num.textContent === '.') {
                    operationDiv.textContent += '.';
                    num2 += ".";
                }
                else {
                    numClicked = +num.textContent;
                    operationDiv.textContent += numClicked;
                    num2 += +numClicked;
                }

            }
        }
        else if (operatorFlage === false) {
            if (num.textContent === '.') {
                operationDiv.textContent += '.';
                num2 += ".";
            }
            else {
                numClicked = +num.textContent;
                operationDiv.textContent += numClicked;
                num2 += +numClicked;
            }

        }

    })
})

allOperators.forEach((operator) => {
    operator.addEventListener('click', () => {
        if (num1 !== "") {
            if (operationDiv.textContent.slice(-1).trimEnd() === "") {
                let arrayOperationDiv = operationDiv.textContent.split("");
                arrayOperationDiv.splice(-2, 2);
                joinedArray = arrayOperationDiv.join("");
                operationDiv.textContent = joinedArray.trim();
                if (deletedNum1 === true && operationDiv.textContent.charAt(0) !== "A"){
                    num1Flag = !num1Flag;
                }

            }
            if (operatorFlage === true && deletedNum1 === true && operationDiv.textContent.charAt(0) !== "A") {
                num1Flag = !num1Flag;
            }
            else if (operatorFlage === false) {
                if (operaterAcc === true) {
                    num1 = result.toString();
                    num2 = "";
                    operationDiv.textContent = `${num1}`;
                }
            }    
        }
        
    })
})


equalBtn.addEventListener('click', () => {
    if (operationDiv.textContent.charAt(0) !== "A"){
        operaterAcc = false;
        operatorFlage = false;
        operation();
    }
    else {
        num1 = result.toString();
        operaterAcc = false;
        operatorFlage = false;
        operation();
    }
    
})

function operationProcess (operationType, sign){
    if(num1 !== ""){
        if (num2 === "") {
            operationDiv.textContent += ` ${sign} `;
            operator = `${operationType}`;
        }
        else if (num2 !== "" && operator === ""){
            num2 = "";
            operationDiv.textContent += ` ${sign} `;
            operator = `${operationType}`;
        }
        else {
            operaterAcc = false;
            operatorFlage = false;
            operation();
            operator = `${operationType}`;
            num1 = result.toString();
            num2 = "";
            operationDiv.textContent = `ANS`;
            operationDiv.textContent += ` ${sign} `;
        }    
    }
}


addBtn.addEventListener('click', () => {
    operationProcess('add', '+')
})

subtractBtn.addEventListener('click', () => {
    operationProcess('subtract', '-')
})


multiplyBtn.addEventListener('click', () => {
    operationProcess('multiply', 'x')
})

divisionBtn.addEventListener('click', () => {
    operationProcess('divide', '÷')
})


modulusBtn.addEventListener('click', () => {
    operationProcess('remainder', '%')
})

powerBtn.addEventListener('click', () => {
    operationProcess('power', '^')
})



function checkForIntegerThenRound() {
    if (Number.isInteger(result) === true) {
        return result;
    }
    else {
        result = Math.round(result*10000)/10000;
        return result; 
    }
}

function add() {
    result = +num1 + +num2;
    return checkForIntegerThenRound();
}

function subtract() {
    result = +num1 - +num2;
    return checkForIntegerThenRound();
}

function multiply() {
    result = +num1 * +num2;
    return checkForIntegerThenRound();
}

function divide() {
    if (num2 == 0) {
        operatorFlage = null;
        result = 'Math ERROR';
        return result;
    }
    result = +num1 / +num2;
    return checkForIntegerThenRound();
}

function modulus() {
    result = +num1 % +num2;
    return checkForIntegerThenRound();
}

function power() {
    result = Math.pow(+num1, +num2);
    return checkForIntegerThenRound();
}


function operation() {
    if (operator === 'add') {
        resultDiv.textContent = add();
    }
    else if (operator === 'subtract') {
        resultDiv.textContent = subtract();
    }
    else if (operator === 'multiply') {
        resultDiv.textContent = multiply();
    }
    else if (operator === 'divide') {
        resultDiv.textContent = divide();
    }
    else if (operator === 'remainder') {
        resultDiv.textContent = modulus();
    }
    else if (operator === 'power') {
        resultDiv.textContent = power();
    }
} 

backspace.addEventListener('click', () => {
    if (operationDiv.textContent.slice(-1).trimEnd() === "S"){
        operationDiv.textContent = "";
        resultDiv.textContent = "";
        num1Flag = true;
        operatorFlage = true;
        operaterAcc = true;
        deletedNum1 = true;
        operaterAcc = true;
        num1 = "";
        num2 = "";
        operator = "";
        
    }
    else if (operationDiv.textContent.slice(-1).trimEnd() !== "" && operator === ""){
            let newText = operationDiv.textContent.slice(0, operationDiv.textContent.length - 1);
            operationDiv.textContent = newText;
            let newNum = num1.toString().slice(0, num1.length - 1);
            num1 = newNum;   
    }
    else if (operationDiv.textContent.slice(-1).trimEnd() !== "" && operator !== ""){
            let newText = operationDiv.textContent.slice(0, operationDiv.textContent.length - 1);
            operationDiv.textContent = newText;
            let newNum = num2.toString().slice(0, num2.length - 1);
            num2 = newNum; 
    }
    
    else if (operationDiv.textContent.slice(-1).trimEnd() !== "" && operator === "" && num1 !== "" && num2 === "")
    {
        deletedNum1 = false;
        if (operatorFlage === true && operationDiv.textContent.charAt(0) !== "A"){
            num1Flag = true;
            operatorFlage = false;
        }
        else {
            num1Flag = false;
            operatorFlage = true;
        }
         operaterAcc = true;
         let newText = operationDiv.textContent.slice(0, operationDiv.textContent.length - 1);
         operationDiv.textContent = newText;
          
         let newNum = num1.toString().slice(0, num1.length - 1);
         num1 = newNum; 
         num2 = "";     
    }
    else {
        operatorFlage = true;
        let newText = operationDiv.textContent.slice(0, operationDiv.textContent.length - 3);
        operationDiv.textContent = newText;
        if (operationDiv.textContent.charAt(0) !== "A"){
            num1Flag = !num1Flag; 
        }
        else if (operationDiv.textContent.charAt(0) === "A"){
            num1Flag = false;
        }
        operator = "";  
        }
})