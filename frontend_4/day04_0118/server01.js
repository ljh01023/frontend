const http = require('http');
// hyper text transfer protocol : 웹브라우저와 서버사이에 데이터를 주고 받는 규칙을 정한 규정
// html, json, images 규정이 필요
const fs =  require('fs') ;

const server = http.createServer((request, response)=>{
    console.log( request.url, request.method  );
    const instream = fs.createReadStream('./data/lorem.txt');
    instream.pipe(response);

    console.log("Hello nodejs");
    console.log("Hello Javascript");
});

server.listen(3000, ()=>{
    console.log( 'listening 3000');
    // http://localhost:3000
    // http://127.0.0.1:3000
    // http://127.0.0.1:3000/hello
    // http://127.0.0.1:3000/about
})

// extention : postman, thunder client
// get
// post
// put, patch
// delete