const fs = require('fs');
// 비동기처리(async), 
const fsPromises = require('fs').promises;

// async function(){
//     try{

//     }catch(err){
//         // error 처리 
//     }finally{
//         // 작업이 완료되든, ERROR 가 있든 무조건 처리
//     }
// }

const fileOption =  async ()=>{
    try{
        const data = await fsPromises.readFile('./data/lorem.txt', 'utf-8');
        console.log( '1. readData ',  data);

        console.log('2. 순서를 보장하는 처리 ');

        await fsPromises.writeFile('./data/oldtext.txt', "한글은 아름다운 글입니다.");
        console.log('3. write complate ');

        await fsPromises.appendFile('./data/oldtext.txt', '\n\n hello nodejs');
        console.log('4. append complate ');

        const olddata = await fsPromises.readFile('./data/oldtext.txt', 'utf-8');
        console.log( '5. olddata read file : ', olddata );

        await fsPromises.unlink('./data/lorem.txt' );
        console.log( '6. delete == unlink complate '  ); // 쓴 곳이 없어서 에러 없음 
        
        await fsPromises.rename('./data/oldtext.txt','./data/newtext.txt' , (err)=>{
            if( err )  throw err; 
        });
        console.log( '7. rename complate '  );
    }catch(err){
        // error 처리 
        console.error( err )
    }finally{
        // 작업이 완료되든, ERROR 가 있든 무조건 처리
        console.log('무조건 실행 end')
    }
}

fileOption();