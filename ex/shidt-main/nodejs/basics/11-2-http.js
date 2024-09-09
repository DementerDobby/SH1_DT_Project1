//요청 객체 살펴보기
const http = require("http");

const server = http.createServer( (req, res)=>{ 
    console.log( "HTTP 요청 발생!");
    console.log( req.method );
    //GET이 2번 출력되는 이유 : favicon.ico와 localhost 2개를 요청하기 때문

    res.setHeader("Content-Type", "text/plain") //응답헤더
    res.write("Hello Node.js!"); //응답본문
    res.end(); //응답종료
} );

server.listen(3000, ()=>{
    console.log("3000번 포트에서 서버 실행 중...");
} );