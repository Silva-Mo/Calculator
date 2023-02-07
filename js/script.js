const nums = document.querySelectorAll('.num');
const operationDiv = document.querySelector('.operation')
const allBtns = document.querySelectorAll('.btn');

let num1;
let num2;
let operator;

nums.forEach((num) => {
    num.addEventListener('click', () => {
        operationDiv.textContent += num.textContent;
        num1 = num;
    })
})

function operatorion(num1, num2, operator){

} 