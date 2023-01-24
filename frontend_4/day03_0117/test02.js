// log : 파일 시스템을 필요로함, 엄청나게 큰파일로 넘겨줄 수도 있음 
// 비동기처리 : 작업시작 -> 끝날때까지 대기하지 않는 시스템
// 순서를 보장하지 못함 -> 순서를 보장하는 처리할 예정 

const fs = require('fs');
const path = require('path');

const readPath = './data/';
// ./data/lorem.txt
fs.readFile(path.join(readPath, 'lorem.txt'), "utf-8",  (err , data)=>{
    if( err )  throw err; 
    console.log('1.' , data);
}) 

process.on('uncaughtException' , (err)=>{
    console.error(`my ERROR ${err}`);
    process.exit(1);
})

console.log('2. 첫번째 실행');

// ./data/newpage.txt
fs.writeFile(path.join(readPath, 'oldpage.txt'), "한글은 아름다운 글입니다.", (err)=>{
    if(err)  throw err; 
    console.log( '3. write  complate ');
})

fs.rename(path.join(readPath, 'oldpage.txt'), path.join(readPath, 'newpage.txt'),  (err)=>{
    if(err)  throw err; 
    console.log( '4. rename  complate ');
})

// 데이타 없을 때 : Error 
// const moduleData = require('./data/users.json');
// console.log('module ', JSON.parse(moduleData));