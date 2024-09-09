const http = require("node:http"); //노드의 코어모듈에 있는 http모듈을 의미한다.

const server = http.createServer((req, res) => {
    console.log("HTTP 요청 발생");
});

server.listen(3000, ()=>{
    console.log("3000번 포트에서 서버 실행 중...4");
});