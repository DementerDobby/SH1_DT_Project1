const http = require("http");
const fs = require("fs");

//html 파일로 응답하기

const server = http.createServer( (req, res)=>{ 
    console.log( "HTTP 요청 발생!");

    res.setHeader("Content-Type", "text/html");
    const readStream = fs.createReadStream(__dirname + "/index.html", "utf-8");
    readStream.pipe( res );
} );

//3000번 포트에서 HTTP 요청을 기다린다.
server.listen(3000, ()=>{
    console.log("3000번 포트에서 서버 실행 중...");
} );