const http = require('http');
const fs =  require('fs') ;
const path = require('path');
const { logEvents } = require('./middleware/logEvents');

const server = http.createServer((req, res)=>{ 
    logEvents(`${req.method}, ${req.url}`)
}); 
 
const rootStr = `
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1> text html </h1>
    <div> 문자열 리턴 </div>
</body>
</html>
`
server.on("request", (req, res)=>{ 
   

    try{
        if( req.url === '/json'){
            const data = fs.readFileSync(path.join(__dirname, 'data', 'users.json'));
            res.writeHead(200, {'Content-type': 'application/json'});
            res.write(data);
            // header 형식이  json  형식이어서 그냥  데이터를 뿌리면 됨 
            res.end();
        }else if( req.url === '/'){
            res.write( rootStr );
            res.end(); 
        }else if( req.url === '/index'){
            const readPath = path.join(__dirname, 'views', 'index.html');
            const data = fs.readFileSync(readPath);
            res.end( data );
        }
    }catch(err){
        console.log(err);
    }
})

server.listen(3000, ()=>{
    console.log( 'listening 3000'); 
})
 
/*
    "start" : "node server",
    // npm start

    "main" : "경로"
    "dev" : "nodemon server" 
    // npm run dev
*/