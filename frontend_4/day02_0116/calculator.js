const { question } = require('readline-sync');
// 두수와 연산자를 입력받아서 계산하는 계산기
const { add, sub, mul, div } = require('./modules/module05');

function showPrompt(){
    let num1 = parseInt(question('first Number : '));
    let operator = question('operator +-*/ : ');
    let num2 = parseInt(question('second Number : '));

    // console.log('num1 ? ', isNumber(num1))
    // console.log('operator ? ', isOperator(operator))
    // console.log('num2 ? ', isNumber(num2))

    if( isNumber(num1) && isOperator(operator) && isNumber(num2)){
        console.log(`${num1} ${operator} ${num2} = ${calculator(num1, operator, num2)}`);
    }   
}

showPrompt();

function isNumber(number){
    return  !isNaN(number);
    // isNaN() : 숫자가 아닌가? 숫자가 아니면  true, 
}

function isOperator( operator ){
    return '+-*/'.indexOf(operator) !== -1; 
    // return '+-*/'.include(operator); // true, false
    // 포함되어 있지 않다면 -1을 반환
}

function calculator(num1, operator, num2){
    // switch(operator){
    //     case '+': return num1 + num2; break; 
    //     case '-': return num1 - num2; break; 
    //     case '*': return num1 * num2; break; 
    //     case '/': return num1 / num2; break; 
    // }
    switch(operator){
       case '+': return add(num1, num2); break; 
       case '-': return sub(num1, num2); break; 
       case '*': return mul(num1, num2); break; 
       case '/': return div(num1, num2); break; 
    }
}