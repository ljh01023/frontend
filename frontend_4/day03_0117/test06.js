const fs = require('fs');
const path = require('path');

const fileOptions = async ()=>{
    try{
        
        await fs.readdir('./data', (err, filelist)=>{
            console.log( 'filelist : ', filelist);
            // filelist :  [ 'lorem.txt', 'new.txt', 'users.json' ]
            // 파일 목록 읽어오기 
        })
        
    }catch(err){
        console.error( err)
    }finally{
        console.log('작업완료');
        // db close 
    }
}

fileOptions();