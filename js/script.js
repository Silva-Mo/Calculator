const calculator = document.querySelector('.calculator');
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
const signBtn = document.querySelector('.sign');
const allOperators = document.querySelectorAll('.operator');
const backspace = document.querySelector('.backspace');
const clearBtn = document.querySelector('.clear');
const historyDiv = document.querySelector('.history');
const historyBtn = document.querySelector('.history-btn');
const screenDiv = document.querySelector('.screen');
const gridOfTools = document.querySelector('.grid-of-tools');
const h2History = document.querySelector('h2');
const lightModeBtn = document.querySelector('.lightMode-btn');
const supportBtn = document.querySelector('.support-btn');
const supportDiv = document.querySelector('.support');
const toolBtns = document.querySelectorAll('button');

let numClicked;
let num1 = "";
let num2 = "";
let operator = "";
let num1Flag = true;
let operatorFlage = true;
let result;
let operaterAcc = true;
let deletedNum1 = true;
let error = true;
let signFlag = true;
let historyFlag = true;
let clickedSign = true;
let lightMode = false;
let showSupport = false;
let operated = false;

allBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (error === false){
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
            error = true;
        }
    })
})

nums.forEach((num) => {
    num.addEventListener('click', () => {
        if(operationDiv.textContent.length >= 35){
            alert('You have exceeded the limit of numbers !')
            return;
        }

        if (num.textContent !== '±' && operated === true){
            operationDiv.textContent = "";
            resultDiv.textContent = "";
            num1Flag = true;
            operatorFlage = true;
            operaterAcc = true;
            deletedNum1 = true;
            operaterAcc = true;
            operated = false;
            num1 = "";
            num2 = "";
            operator = "";
        }

        if (num.textContent === "±" && operationDiv.textContent.charAt(0) !== "A"){
            resultDiv.textContent = "";
        }

        if (operationDiv.textContent.slice(-1) !== 's'){
            if (operatorFlage === true) {
                if (num1Flag === true) {
                        if (num.textContent === "±" || clickedSign === false){
                            splittedDiv = operationDiv.textContent.split('');
                            if (num1.charAt(0) !== "-" && operator === ""){
                                let oldNum1 = num1;
                                num1 = "-" + oldNum1; 
                                splittedDiv.unshift("-");
                                joined = splittedDiv.join('');
                                operationDiv.textContent = joined;
                            }
                            else if (num1.includes('-') === true && operator === ""){
                                let newNum1 = num1.slice(1);
                                num1 = newNum1;
                                splittedDiv.shift();
                                joined = splittedDiv.join('');
                                operationDiv.textContent = joined;
                            }
                            if (clickedSign === false) {
                                clickedSign === true;
                            } 
                        }
                        else if (num.textContent === '.') {
                            if (num1.includes('.') === false){
                                operationDiv.textContent += '.';
                                num1 += ".";    
                            }
                            
                        }
                        
                        else {
                            numClicked = num.textContent;
                            operationDiv.textContent += numClicked;
                            num1 += +numClicked;
                        }

                    
                }
                else if (num1Flag === false) {
                    if (num.textContent === "±"){
                        splittedDiv = operationDiv.textContent.split('');
                        if (num2.charAt(0) !== "-"){
                            let oldNum2 = num2;
                            num2 = "-" + oldNum2;
                            let signIndex = splittedDiv.findIndex((num) => {
                                if (num === ' '){
                                
                                    return true;
                                }  
                            })
                            splittedDiv.splice(signIndex + 3, 0, "-");
                            operationDiv.textContent = splittedDiv.join('');
                        }
                        else if (num2.includes('-') === true){
                            let newNum2 = num2.slice(1);
                            num2 = newNum2;
                            let signIndex = splittedDiv.findIndex((num) => {
                                if (num === ' '){
                                
                                    return true;
                                }
                            })
                            splittedDiv.splice(signIndex + 3, 1);
                            operationDiv.textContent = splittedDiv.join('');

                        }
                    }
                    else if (num.textContent === '.') {
                        if (num2.includes('.') === false){
                            operationDiv.textContent += '.';
                            num2 += "." ;   
                        }
                        
                    }
                    else {
                        numClicked = +num.textContent;
                        operationDiv.textContent += numClicked;
                        num2 += +numClicked;
                    }

                }
            }
            else if (operatorFlage === false) {
                if (num.textContent === "±"){
                    splittedDiv = operationDiv.textContent.split('');
                    if (num2.charAt(0) !== "-"){
                        let oldNum2 = num2;
                        num2 = "-" + oldNum2;
                        let signIndex = splittedDiv.findIndex((num) => {
                            if (num === ' '){

                            
                                return true;
                            }  
                        })
                        splittedDiv.splice(signIndex + 3, 0, "-");
                        operationDiv.textContent = splittedDiv.join('');
                    }
                    else if (num2.includes('-') === true){
                        let newNum2 = num2.slice(1);
                        num2 = newNum2;
                        let signIndex = splittedDiv.findIndex((num) => {
                            if (num === ' '){
                                return true;
                            }
                        })
                        splittedDiv.splice(signIndex + 3, 1);
                        operationDiv.textContent = splittedDiv.join('');

                    }
                }
                else if (num.textContent === '.') {
                    if (num2.includes('.') === false){
                        operationDiv.textContent += '.';
                        num2 += ".";    
                    }
                }
                else {
                    numClicked = +num.textContent;
                    operationDiv.textContent += numClicked;
                    num2 += +numClicked;
                }

            }

        }
        
    })
})

allOperators.forEach((operator) => {
    operator.addEventListener('click', () => {
        if(operationDiv.textContent.length >= 35){
            return;
        }
        if ((num1 !== "" && num1.charAt(0) === "-" && /^[0-9]+$/.test(num1.charAt(1)) || num1 !== "" && num1.charAt(0) !== "-" ) && 
        (num1 !== "" && num1.charAt(0) === "." && /^[0-9]+$/.test(num1.charAt(1)) || num1 !== "" && num1.charAt(0) !== ".")) {
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
        }
        
    })
})


equalBtn.addEventListener('click', () => {
    if ((num2 !== "" && num2.charAt(0) === "-" && /^[0-9]+$/.test(num2.charAt(1)) || num2 !== "" && num2.charAt(0) !== "-" ) && 
       (num2 !== "" && num2.charAt(0) === "." && /^[0-9]+$/.test(num2.charAt(1)) || num2 !== "" && num2.charAt(0) !== ".")){
        if (num2 === "-"){
            return;
        }
        else if (operationDiv.textContent.charAt(0) !== "A"){
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
    }
})

function operationProcess (operationType, sign){
    if(operationDiv.textContent.length >= 35){
        alert('You have exceeded the limit of numbers !');
        return;
    }
    if((num1 !== "" && num1.charAt(0) === "-" && /^[0-9]+$/.test(num1.charAt(1)) || num1 !== "" && num1.charAt(0) !== "-")&& 
    (num1 !== "" && num1.charAt(0) === "." && /^[0-9]+$/.test(num1.charAt(1)) || num1 !== "" && num1.charAt(0) !== ".")){
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
            if((num2 !== "" && num2.charAt(0) === "-" && /^[0-9]+$/.test(num2.charAt(1)) || num2 !== "" && num2.charAt(0) !== "-" ) && 
            (num2 !== "" && num2.charAt(0) === "." && /^[0-9]+$/.test(num2.charAt(1)) || num2 !== "" && num2.charAt(0) !== ".")){
                operatorFlage = false;
                operation();   
                operated = false; 
            }
            if (error === false){
                num1 = "";
                operationDiv.textContent = 'Math ERROR, press any button to continue :)';
                resultDiv.textContent = " ";
            }
            else {
                if (num2 !== "-"){
                    operator = `${operationType}`;
                    num1 = result.toString();
                    num2 = "";
                    operationDiv.textContent = `Ans`;
                    operationDiv.textContent += ` ${sign} `;  
                }  
                else{
                    operatorFlage = false;
                    return
                }
                
            }
        }    
    }
}


addBtn.addEventListener('click', () => {
    operationProcess('add', '+');
})

subtractBtn.addEventListener('click', () => {
    operationProcess('subtract', '-');
})


multiplyBtn.addEventListener('click', () => {
    operationProcess('multiply', 'x');
})

divisionBtn.addEventListener('click', () => {
    operationProcess('divide', '÷');
})

powerBtn.addEventListener('click', () => {
    operationProcess('power', '^');
})


function checkForIntegerThenRound() {
    if (Number.isInteger(result) === true) {
        return result;
    }
    else {
        result = Math.round(result*100000)/100000;
        return result; 
    }
}

function add() {
    result = +num1 + +num2;
    let divOfPreviousOperation = document.createElement('div');
    divOfPreviousOperation.classList.add('previous-result');
    divOfPreviousOperation.textContent = `${num1}  +  ${num2} ${'\xa0'.repeat(1)} = ${'\xa0'.repeat(1)} ${checkForIntegerThenRound()}`;
    historyDiv.prepend(divOfPreviousOperation);
    return checkForIntegerThenRound();
    
}

function subtract() {
    result = +num1 - +num2;
    let divOfPreviousOperation = document.createElement('div');
    divOfPreviousOperation.classList.add('previous-result');
    divOfPreviousOperation.textContent = `${num1}  -  ${num2} ${'\xa0'.repeat(1)} = ${'\xa0'.repeat(1)} ${checkForIntegerThenRound()}`;
    historyDiv.prepend(divOfPreviousOperation);
    return checkForIntegerThenRound();
}

function multiply() {
    result = +num1 * +num2;
    let divOfPreviousOperation = document.createElement('div');
    divOfPreviousOperation.classList.add('previous-result');
    divOfPreviousOperation.textContent = `${num1}  x  ${num2} ${'\xa0'.repeat(1)} = ${'\xa0'.repeat(1)} ${checkForIntegerThenRound()}`;
    historyDiv.prepend(divOfPreviousOperation);
    return checkForIntegerThenRound();
}

function divide() {
    result = +num1 / +num2;
    if (num2 == 0) {
        error = false;
        num1 = "";
        operationDiv.textContent = `Math ERROR, press any button to continue :)`;
        resultDiv.textContent = "";
    }
    else {
        let divOfPreviousOperation = document.createElement('div');
        divOfPreviousOperation.classList.add('previous-result');
        divOfPreviousOperation.textContent = `${num1}  ÷  ${num2} ${'\xa0'.repeat(1)} = ${'\xa0'.repeat(1)} ${checkForIntegerThenRound()}`;
        historyDiv.prepend(divOfPreviousOperation);
        return checkForIntegerThenRound();
    }
    
}

function power() {
    result = (+num1) ** (+num2);
    let divOfPreviousOperation = document.createElement('div');
    divOfPreviousOperation.classList.add('previous-result');
    divOfPreviousOperation.textContent = `${num1}  ^  ${num2} ${'\xa0'.repeat(1)} = ${'\xa0'.repeat(1)} ${checkForIntegerThenRound()}`;
    historyDiv.prepend(divOfPreviousOperation);
    return checkForIntegerThenRound();
}


function operation() {
    operated = true;
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
    else if (operator === 'power') {
        resultDiv.textContent = power();
    }
} 

backspace.addEventListener('click', () => {
    operated = false;
    if(operationDiv.textContent.charAt(0) !== "A"){
        resultDiv.textContent = "";    
    }
    if (operationDiv.textContent.slice(-1).trimEnd() === "s"){
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
            if(operator !== ""){
              num1Flag = !num1Flag; 
            }
            
        }
        else if (operationDiv.textContent.charAt(0) === "A"){
            num1Flag = false;
        }
        operator = "";  
        }
})

clearBtn.addEventListener('click', () => {
    if (confirm('Do you really want to clear ? history will be cleared too !') === true){
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
        let historyResults = document.querySelectorAll('.previous-result');
        historyResults.forEach((result) => {
            historyDiv.removeChild(result);
        })
        error = true;
       
    }
})

historyBtn.addEventListener('click', () => {
    historyFlag = !historyFlag;
    if (historyFlag === false){
        operationDiv.setAttribute('style', 'display: none;');
        resultDiv.setAttribute('style', 'display: none;');
        historyDiv.setAttribute('style', 'display: flex'); 
        h2History.setAttribute('style', 'display: block;');   
        historyDiv.classList.add('slide-in');
    }
    else{
        operationDiv.removeAttribute('style');
        resultDiv.removeAttribute('style');
        historyDiv.removeAttribute('style');
        h2History.removeAttribute('style');
        historyDiv.classList.remove('slide-in');
    }
    
})

window.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace'){
        backspace.click();
    }
    else if (e.key === 'CapsLock'){
        nums.forEach((num) => {
            if (num.textContent === '±'){
                num.click();
            }
            
        })
    }
    else if (Number.isInteger(+e.key) === true && e.key !== " " || e.key === "."){
        nums.forEach((num) => {
            if (e.key.toString() === num.textContent){
                num.click();
            }
        })
    } 

    else if (e.key === "+"){
        addBtn.click();
    }
    else if (e.key === "-"){
        subtractBtn.click();
    }
    else if (e.key === "*"){
        multiplyBtn.click();
    }
    else if (e.key === "/"){
        divisionBtn.click();
    }
    else if (e.key === "^"){
        powerBtn.click();
    }
    else if (e.key === 'Enter'){
        equalBtn.click();
    }

    else if (e.key === "Escape"){
        clearBtn.click();
    }
})

lightModeBtn.addEventListener('click', () => {
    lightMode = !lightMode;
    if (lightMode){
        gridOfTools.setAttribute('style', 'background-color: #f3fdfc');
        calculator.setAttribute('style', 'border: 2px solid black;');
        screenDiv.setAttribute('style', 'background-color: white;');
        nums.forEach((num) => {
            if(num.textContent === '±'){
                return;
            }
            num.setAttribute('style', 'color: black;');
        })
        operationDiv.classList.add('operation-light');
        historyDiv.classList.add('history-light');
        h2History.classList.add('light');
    }
    else if (!lightMode){
        gridOfTools.removeAttribute('style');
        calculator.removeAttribute('style');
        screenDiv.removeAttribute('style');
        nums.forEach((num) => {
            if(num.textContent === '±'){
                return;
            }
            num.removeAttribute('style');
        })
        operationDiv.classList.remove('operation-light');
        historyDiv.classList.remove('history-light');
        h2History.classList.remove('light');
    }
})

supportBtn.addEventListener('click', () => {
    showSupport = !showSupport;
    if (showSupport){
        supportDiv.setAttribute('style', `display: grid;
        grid-template-columns: repeat(2, auto);
        grid-template-rows: repeat(5. auto);`);
    }
    else {
        supportDiv.removeAttribute('style');
    }
})
