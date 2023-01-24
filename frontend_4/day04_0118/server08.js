const http = require('http');
const fs =  require('fs') ;
const path = require('path');
const { logEvents } = require('./middleware/logEvents');

const server = http.createServer((req, res)=>{ 
    logEvents(`${req.method}, ${req.url}`)
}); 

server.on("request", (req, res)=>{ 
    if( req.url === '/' && req.method === 'GET'){
        const content = fs.readFileSync(path.join(__dirname, 'views', 'index.html'));
        res.writeHead(200, { 'Content-Type' : 'text/html'});
        res.end(content);
    }

    else if( req.url === '/about' && req.method === 'GET'){
        const content = fs.readFileSync(path.join(__dirname, 'views', 'about.html'));
        res.writeHead(200, { 'Content-Type' : 'text/html'});
        res.end(content);
    }

    else if( req.url === '/subdir' && req.method === 'GET'){
        const content = fs.readFileSync(path.join(__dirname, 'views', 'subdir', 'index.html'));
        res.writeHead(200, { 'Content-Type' : 'text/html'});
        res.end(content);
    }

    else if( req.url === '/api/user' && req.method === 'GET'){
        const content = [
            { name : "kim", age: 40}
        ]
        res.writeHead(200, { 'Content-Type' : 'application/json'});
        res.end(JSON.stringify(content));
    }

    else if( req.url === '/api/users' && req.method === 'GET'){
        const content =  fs.readFileSync( path.join(__dirname, 'data', 'users.json'));
        // 배열로 읽어오기 
        res.writeHead(200, { 'Content-Type' : 'application/json'});
        res.end( content );
    }

    // localhost:3000//api/users/id=3
    // localhost:3000//api/users/id
    // CRUD = RestFull API
    // r : read
    // u : update
    // d : delete
    else if( req.url.includes('/api/users/id') && req.method === 'GET'){
        //const content =  fs.readFileSync( path.join(__dirname, 'data', 'users.json'));

        fs.readFile( path.join(__dirname, 'data', 'users.json'), (err, content)=>{
            const rawData = JSON.parse(content); 

            // id 찾기 
            const iddata = req.url.split('/')[3]; 
            const id = iddata.split('=')[1];
            console.log( id ); // [ 'id','3' ]

            const findData = rawData.find( data => data.id === parseInt(id) );

            res.writeHead(200, { 'Content-Type' : 'application/json'});
            res.end( JSON.stringify(findData) );
        });
    }

    // CREATE // c : create
    else if( req.url.includes('/api/products/id') && req.method === 'POST'){
        console.log( req.url ,  req.method );

        let body = ''; // req.body
        
        req.on('data', (chunk)=>{
            // 메모리 데이터 가져오기 
            body += chunk.toString();
            const {  id, name, price, status } = JSON.parse(body);

            // 객체생성 
            const newProduct = {  id, name, price, status }
            // {
            //     "id" : 4, 
            //     "name" : "nodejs",
            //     "price" : 40000, 
            //     "status" : "step4"
            // } 

            console.log( newProduct );
            fs.readFile( path.join(__dirname, 'data', 'products.json'), 'utf-8', (err, products)=>{
                if(err) console.log(err);

                const allProducts = JSON.parse(products);
                allProducts.push(newProduct );

                fs.writeFile(path.join(__dirname, 'data', 'products.json'),
                    JSON.stringify( allProducts, null, "  "), 'utf-8',
                    (err)=>{
                        console.log(err);
                    }
                )

                // 등록을 완료한 후 응답
                const resData = { success : true, message : '등록 되었습니다.', data : newProduct}
                res.write(JSON.stringify(resData));
                res.end();
            })
        })
       
    }

    // localhost:3000//api/users/id=1
    else if( req.url.includes('/api/products/id') && req.method === 'DELETE'){
        const iddata = req.url.split('/')[3]; 
        const id = iddata.split('=')[1];

        fs.readFile( path.join(__dirname, 'data', 'products.json'), 'utf-8', (err, products)=>{
            if(err) console.log(err);

            const allProducts = JSON.parse(products); 
            const filteredData = allProducts.filter( product => product.id !== parseInt(id))


            fs.writeFile(path.join(__dirname, 'data', 'products.json'),
                JSON.stringify( filteredData, null, "  "), 'utf-8',
                (err)=>{
                    console.log(err);
                }
            )
        })
        const resData = { success : true, message : '정상 삭제되었습니다.'}
        res.write(JSON.stringify(resData));
        res.end(); 
    }

    // put, patch : 수정
    // localhost:3000//api/users/id=1
    // ID를 찾아서 , 기존데이터 로드 ,  기존데이터에서 삭제 , 추가 
    else if( req.url.includes('/api/products/id') && req.method === 'PUT'){
        const id = req.url.split('/')[3].split('=')[1];
        console.log(id);

        let body = ''; // req.body
        
        req.on('data', (chunk)=>{
            // 메모리 데이터 가져오기 
            body += chunk.toString();
            const {  id, name, price, status } = JSON.parse(body);

            // 객체생성 
            const newProduct = {  id, name, price, status }
            // {
            //     "id" : 4, 
            //     "name" : !name ? 기존데이터 : name
            //     "price" : 40000, 
            //     "status" : "step4"
            // } 

            console.log( newProduct );
            fs.readFile( path.join(__dirname, 'data', 'products.json'), 'utf-8', (err, products)=>{
                if(err) console.log(err);

                const allProducts = JSON.parse(products);
                const findData = allProducts.find( product => product.id === parseInt(id));

                // 수정된 데이터 
                findData.name = newProduct.name ? newProduct.name : findData.name; 
                findData.price = newProduct.price ? newProduct.price : findData.price; 
                findData.status = newProduct.status ? newProduct.status : findData.status; 

                const filterData = allProducts.filter( product => product.id !== parseInt(id));
                filterData.push( findData); 

                fs.writeFile(path.join(__dirname, 'data', 'products.json'),
                    JSON.stringify( allProducts, null, "  "), 'utf-8',
                    (err)=>{
                        console.log(err);
                    }
                )

                // 등록을 완료한 후 응답
                const resData = { success : true, message : '수정 되었습니다.', data : findData}
                res.write(JSON.stringify(resData));
                res.end();
            })
        })
    }
})
server.listen(3000, ()=>{
    console.log( 'listening 3000'); 
})