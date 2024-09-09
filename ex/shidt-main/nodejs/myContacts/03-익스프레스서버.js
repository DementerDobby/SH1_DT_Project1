//익스프레스 서버 만들기

//app.js에서 실행시킨다.
const express = require("express");
const app = express();

const port = 3000;

// get : get 메소드를 지원하는 서버를 생성
app.get("/", (req, res) => {
    res.status(200); //상태코드를 200으로 설정
    res.send("Hello Express~");
});

app.listen(port, ()=>{
    console.log(`${port}번 포트에서 서버 실행 중...`);
});

//package.json의 scripts 명령 활용하기
//명령어> npm start
//"scripts" : {
//  "test" : "echo ...",
//  "start" : "nodemon app.js"
//}

//URL 요청 : 웹브라우저에서 HTTP Client 프로그램(POSTMAN, Thunder Client VS코드 확장)
// HTTP Client : 웹서버와 클라이언트 통신을 원활하게 테스트하는 용도.
//
//GET localhost:3000으로 app.js를 테스트

