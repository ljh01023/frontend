import { format } from 'date-fns';
// "type": "module", 를 pacakage.json 추가하는 대신 확장자를  mjs로 처리

const today = new Date();
console.log( today );
console.log( today.toLocaleString() );
// intl 

console.log( format( today , 'yyyy-MM-dd'));
// 월 대문자MM, 분 소문자 mm
console.log( format( today , 'yy/MM/dd'));
console.log( format( today , 'yy/MM/dd  hh:mm:ss'));
