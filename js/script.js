const nums = document.querySelectorAll('.num');
const operationDiv = document.querySelector('.operation');
const resultDiv = document.querySelector('.result');
const allBtns = document.querySelectorAll('.btn');
const addBtn = document.querySelector('.add');
const subtractBtn = document.querySelector('.subtract');
const multiplyBtn = document.querySelector('.multiply');
const divisionBtn = document.querySelector('.division');
const modulusBtn = document.querySelector('.modulus');
const equalBtn = document.querySelector('.equal');
const allOperators = document.querySelectorAll('.operator')

let numClicked;
let num1 = "";
let num2 = "";
let operator = "";
let num1Flag = true;
let operatorFlage = true;
let result;
let operaterAcc = true;

nums.forEach((num) => {
    num.addEventListener('click', () => {
    if (operatorFlage === true){
        if (num1Flag === true){
            if (operatorFlage){
                numClicked = num.textContent;
                console.log(numClicked);
                operationDiv.textContent += numClicked;
                num1 += +numClicked;    
            }
        }
        else if (num1Flag === false){
            numClicked = +num.textContent;
            operationDiv.textContent += numClicked;
            num2 += +numClicked;
        }
    }
    else if (operatorFlage === false){
        numClicked = +num.textContent;
        operationDiv.textContent += numClicked;
        num2 += +numClicked;
    }
        
    })
})

allOperators.forEach((operator) => {
    operator.addEventListener('click', () => {
        if (operatorFlage === true){
         num1Flag = !num1Flag;
        }
        else if (operatorFlage === false) {
        if (operaterAcc === true){
            num1 = result;
            num2 = "";
            operationDiv.textContent = `${num1}`;    
        }
    }
  })
})


equalBtn.addEventListener('click', () => {
    operaterAcc = false;
    operatorFlage = false;
    operation();
})


addBtn.addEventListener('click', () => {
    if (num2 === ""){
        operationDiv.textContent += ' + ' ;
        operator = 'add';
    }
    else {
        operaterAcc = false;
        operatorFlage = false;
        operation();
        operator = 'add';
        num1 = result;
        num2 ="";
        operationDiv.textContent = `${num1}`;
        operationDiv.textContent += ' + ' ;
    }      
})

subtractBtn.addEventListener('click', () => {
    if (num2 === ""){
        operationDiv.textContent += ' - ' ;
        operator = 'subtract';
    }
    else {
        operaterAcc = false;
        operatorFlage = false;
        operation();
        operator = 'subtract';
        num1 = result;
        num2 ="";
        operationDiv.textContent = `${num1}`;
        operationDiv.textContent += ' - ' ;
    }     
})

multiplyBtn.addEventListener('click', () => {
    if (num2 === ""){
        operationDiv.textContent += ' x ' ;
        operator = 'multiply';
    }
    else {
        operaterAcc = false;
        operatorFlage = false;
        operation();
        operator = 'multiply';
        num1 = result;
        num2 ="";
        operationDiv.textContent = `${num1}`;
        operationDiv.textContent += ' x ' ;
    }      
})

divisionBtn.addEventListener('click', () => {
    if (num2 === ""){
        operationDiv.textContent += ' ÷ ' ;
        operator = 'divide';
    }
    else {
        operaterAcc = false;
        operatorFlage = false;
        operation();
        operator = 'divide';
        num1 = result;
        num2 ="";
        operationDiv.textContent = `${num1}`;
        operationDiv.textContent += ' ÷ ' ;
    }      
})

function add(){
    result = +num1 + +num2;
    return result;
}

function subtract(){
    result = +num1 - +num2;
    return result;
}

function multiply(){
    result = +num1 * +num2;
    return result;
}

function divide() {
    if (num2 == 0){
    operatorFlage = null;
    result = 'Math ERROR';
    return result;
    }
    result = +num1 / +num2;
    return result;
}


function operation(){
    if(operator === 'add'){
        resultDiv.textContent = add();
    }
    else if ( operator === 'subtract'){
        resultDiv.textContent = subtract();
    }
    else if (operator === 'multiply'){
        resultDiv.textContent = multiply();
    }
    else if (operator === 'divide'){
        resultDiv.textContent = divide();
    }
} 