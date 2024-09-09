//라우터에서 컨트롤러로 코드 이전하기

//MVC 패턴
//Model - View - Controller(Service)
//데이터   UI화면   로직코드

//SW를 만들때, MVC패턴을 지키면, 코드의 이해가 빠르고,
//직관적이고 품질좋은 코드를 만들 수 있다.

//관련파일
// ./config/dbConnect.js
// ./routes/contactRoutes-3.js
// ./controllers/contactController-1.js
// 실행파일 contactController.js

//npm 모듈 - express-async-handler : 익스프레스의 비동기처리 지원하는 모듈
//npm i express-async-handler

//http body
// {
//  "name": "hong",
//  "email": "hong@mail.com",
//  "phone": "12345"
// }

const express = require("express");
const dbConnect = require("./config/dbConnect");

const app = express();

const port = 3000;

dbConnect();

app.use(express.json());
app.use(express.urlencoded({ extended:true }));

app.use("/contacts", require("./routes/contactRoutes"));//contactRoutes-3.js

app.listen(port, ()=>{
    console.log("3000번 포트에서 서버 실행 중...");
});