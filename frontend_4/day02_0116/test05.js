 const Math = require('./modules/module05');
 // const Math = { add, sub, mul, div } ;


console.log( Math.add(5, 5) );

const { add, sub, mul, div } = require('./modules/module05');
console.log( add(3, 3));
console.log( sub(3, 3));
console.log( mul(3, 3));
console.log( div(3, 3));