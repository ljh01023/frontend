// const readlineSync = require('readline-sync');
 
// // Wait for user's response.
// var num = readlineSync.question('input number? ');
// console.log('input number ' + num + '!');

const { question } = require('readline-sync');
var num = question('input number : ');
console.log('inputed number : ', num);