const fs = require('fs');
const path = require('path');

const fileOptions = async ()=>{
    try{
        const data = await fs.readFileSync(path.join(__dirname, 'data', 'lorem.txt'), 'utf-8');
        console.log('1. read data ');

        console.log('2. 순서를 보장');

        await fs.writeFileSync(path.join(__dirname, 'data', 'old.txt'), "한글은 아름다운 글입니다.");
        console.log('3. writeFileSync');

        await fs.appendFileSync(path.join(__dirname, 'data', 'old.txt'), "\n hello nodejs");
        console.log('4. appendFileSync');

        const olddata = await fs.readFileSync(path.join(__dirname, 'data', 'old.txt'), "utf-8" );
        console.log('5. readFileSync');

        await fs.renameSync(
             path.join(__dirname, 'data', 'old.txt'), 
             path.join(__dirname, 'data', 'new.txt')
        );
        console.log('6. renameSync');

        
    }catch(err){
        console.error( err)
    }finally{
        console.log('작업완료');
        // db close 
    }
}

fileOptions();