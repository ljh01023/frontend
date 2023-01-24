const { format } = require('date-fns');

const today = new Date();
console.log( today );
console.log( today.toLocaleString() );
// intl 

console.log( format( today , 'yyyy-MM-dd'));
// 월 대문자MM, 분 소문자 mm
console.log( format( today , 'yy/MM/dd'));
console.log( format( today , 'yy/MM/dd  hh:mm:ss'));
