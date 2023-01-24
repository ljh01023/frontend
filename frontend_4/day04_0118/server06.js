const http = require('http');
const fs =  require('fs') ;
const path = require('path');
const { logEvents } = require('./middleware/logEvents');

const server = http.createServer((req, res)=>{ 
    logEvents(`${req.method}, ${req.url}`)
}); 
  
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

    

    try{
        if( contentType == "text/html" &&  extname == "") filePath +=".html";
        const data =  fs.readFileSync( filePath );

        res.writeHead(200, { 'content-type' :  contentType});
        switch( req.method ){
            case 'GET':
                res.end(data); break; 
            case 'POST':
                res.write('POST method');
                res.end(); break;   
            case 'PUT':
                res.write('PUT method');
                res.end(); break; 
            case 'DELETE':
                res.write('DELETE method');
                res.end(); break; 
        }
    } catch(err){

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