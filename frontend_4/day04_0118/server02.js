const http = require('http');
const fs =  require('fs') ;

const users = [
    { id : 1, name :'kim'}
]

// const server = http.createServer((req, res)=>{
//     console.log( req.url, req.method  );
//     // res.statusCode = 200; 
//     // res.setHeader('Content-Type', 'text/html;charset=utf-8');
//     res.writeHeader( 200, {'Content-Type': 'text/html;charset=utf-8' });
//     res.write("<h1>한글은 아름다운 글입니다.</h1>");
//     res.end();
// });

const server = http.createServer((req, res)=>{
        console.log( req.url, req.method  );
        res.writeHeader( 200, {'Content-Type': 'application/json' });
        res.write(JSON.stringify(users));
        res.end();
});
    
// const server = http.createServer((req, res)=>{
//         console.log( req.url, req.method  );
//         res.statusCode = 200; 
//         res.writeHeader('Content-Type', 'image/png');
//         // 동기처리
//         fs.readFile('./ch.png', (err, data)=>{
//             res.write(data);
//             res.end();
//         })
// });

server.listen(3000, ()=>{
    console.log( 'listening 3000'); 
})

// extention : postman, thunder client
// 요청 method 방식
// get
// post
// put, patch
// delete

// 데이터를 보내는 방식
// Header
// body
// params


/*
    "start" : "node server",
    // npm start
    "dev" : "nodemon server" 
    // npm run dev
*/