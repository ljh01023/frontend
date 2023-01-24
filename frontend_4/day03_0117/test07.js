const fs = require('fs');
const path = require('path');
// 데이터량이 많은 경우 buffer 라는 기억장치를 이용함 
// 스트리밍 처리 

const fileOptions = async ()=>{
    try{
        const readStream = fs.createReadStream(path.join(__dirname, 'data', 'bigdata.txt'), 
                        { encoding : 'utf-8'});
         
        const writeStream = fs.createWriteStream(path.join(__dirname, 'data', 'writeData.txt'));
        /* 
        readStream.on('data', (chunk)=>{
            console.log("\n\n  ========= new chunk ========== ");
            console.log( chunk );
            writeStream.write("\n\n ========= new chunk ========== ");
            writeStream.write( chunk );
        })
        */
        
        readStream.pipe(writeStream);

    }catch(err){
        console.error( err)
    }finally{
        console.log('작업완료');
        // db close 
    }
}

fileOptions();