// log : 파일 시스템을 필요로함, 엄청나게 큰파일로 넘겨줄 수도 있음 
// 비동기처리 : 작업시작 -> 끝날때까지 대기하지 않는 시스템
// 순서를 보장하지 못함 -> 순서를 보장하는 처리할 예정 

const fs = require('fs');
const path = require('path');

const readPath = './data/';
// ./data/lorem.txt
fs.readFile(path.join(readPath, 'lorem.txt'), "utf-8",  (err , data)=>{
    if( err )  throw err; 
    // code: 'ENOENT',
    console.log(data);
    //console.log(data.toString());
}) 

process.on('uncaughtException' , (err)=>{
    console.error(`my ERROR ${err}`);
    process.exit(1);
})

console.log('1. 첫번째 실행');

// ./data/users.json
fs.readFile(path.join(readPath, 'users.json'), (err, data)=>{
    if(err)  throw err; 
    //console.log("toString ", data.toString());
    const resData = JSON.parse(data);
    console.log("Json.Parse[0] ", resData[0]);
})

// 데이타 없을 때 : Error 
const moduleData = require('./data/users.json');
console.log('module : ', JSON.stringify(moduleData, null, "   "));
//                                                  callback == null, " " 코드 계층 간격
