const add = function(a, b){
    return a + b; 
}
const sub = (a, b)=>{
    return a > b ? a - b : b - a; 
}
const mul = (a, b)=> a * b; 
const div = (a, b)=> a / b; 

module.exports = { add, sub, mul, div }