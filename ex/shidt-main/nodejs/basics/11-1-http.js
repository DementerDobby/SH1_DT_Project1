// http모듈을 이용한 간단한 서버 작성하기

const http = require("http");

//createServer : 서버를 생성하면서, 요청이 오면 콜백함수를 호출한다.
const server = http.createServer( (req, res)=>{ 
    console.log( "HTTP 요청 발생!");
} );

//3000번 포트에서 HTTP 요청을 기다린다.
server.listen(3000, ()=>{
    console.log("3000번 포트에서 서버 실행 중...");
} );

//웹브라우저 주소창 : localhost:3000

//URL(URI) 주소
//http://www.naver.com/news/100:80?page=2&query=hong
//http(s) 통신 프로토콜
////www.naver.com/news/100  경로
//:80  포트번호
//page=2&query=hong  쿼리 스트링(page=2, query=hong)

//www.naver.com 도메인네임 => IP주소(125.209.222.141)로 변경된다. 
//포트번호 : 하나의 PC에서 각각 통신이 전달되는 접점.
// 웹브라우저 : 80 HTTP
// FTP : 21 
// 게임 : 8888

