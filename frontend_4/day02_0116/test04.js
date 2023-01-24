// const name = require('./modules/module04.js');
const myObject = require('./modules/module04.js');
// const myObject = { name ,  user , test, hello };
// HEM 

console.log( myObject.name );
console.log( myObject.user );
// jemicom
// { greeting: 'Hello ', name: 'node.js' }

const { name, user } = require('./modules/module04');
// const myObject = { name ,  user , test, hello };
console.log( name )
console.log( user.greeting , user.name )
// jemicom
// Hello  node.js