const fs = require('fs');
const path = require('path');
// 폴더 만들고 지우기

const fileOptions = async ()=>{
    try{
        if( !fs.existsSync('./model') ){
            fs.mkdir('./model', (err)=>{
                if(err) throw err; 
                console.log('폴더생성 완료');
            })
        }
        if( fs.existsSync('./model') ){
            fs.rmdir('./model', (err)=>{
                if(err) throw err; 
                console.log('폴더삭제 완료');
            })
        }
    }catch(err){
        console.error( err)
    }finally{
        console.log('작업완료');
        // db close 
    }
}

fileOptions();


/*
fs.mkdir('./model', (err)=>{
    if(err) throw err; 
    console.log('폴더생성 완료');
})

setTimeout(()=>{
    fs.rmdir('./model', err=>{
        if(err) throw err; 
        console.log('폴더삭제 완료');
    })
}, 3000)
*/