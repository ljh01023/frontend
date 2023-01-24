const os = require('os');

console.log('osType', os.type());
console.log('freemem', os.freemem());
console.log('hostname', os.hostname());

const path = require('path');

console.log( path.basename('/d/frontend_4/day02_0116/test03.js'));
// path에서 파일명만 추출
console.log( path.extname('/d/frontend_4/day02_0116/test03.js'));
// path에서 확장자만 추출
console.log( path.dirname('/d/frontend_4/day02_0116/test03.js'));
// path에서 디렉토리만 추출

console.log(path.join('/', '\\day02', 'test01.js'));
console.log(path.join('/', '//day02', 'test01.js'));
// 윈도우 환경에서는 /(슬래시,한글인경우  화폐표시원), \(백슬러시)
// 리눅스환경과 윈도우환경을 구분하지 않고  유효한 path로 제작함 
