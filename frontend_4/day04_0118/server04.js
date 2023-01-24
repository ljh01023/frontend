const http = require('http');
const fs =  require('fs') ;
const path = require('path');
const { logEvents } = require('./middleware/logEvents');

const server = http.createServer((req, res)=>{ 
    logEvents(`${req.method}, ${req.url}`)
}); 
  
// method : GET 처리 
server.on("request", (req, res)=>{ 
    let filePath = path.join(__dirname, 'views', req.url === '/' ? "index.html" : req.url );
    // localhost:3000/  ./views/index.html
    // localhost:3000/about  ./views/about

    let extname = path.extname(filePath);
    // /style/style.css

    let contentType = "text/html";
    switch( extname ){
        case '.js': contentType = "text/javascript" ; break; 
        case '.css': contentType = "text/css" ; break; 
        case '.json': contentType = "application/json" ; break; 
        case '.png': contentType = "image/png" ; break; 
        case '.jpeg': contentType = "image/jpg" ; break;  
    }

    if( contentType == "text/html" &&  extname == "") filePath +=".html";
    // localhost:3000/about  ./views/about 요청일때 
    // localhost:3000/about  ./views/about.html 
    try{
       const data =  fs.readFileSync( filePath );
       res.writeHead( 200, { 'Content-Type' : contentType}); 
       res.end(data);
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