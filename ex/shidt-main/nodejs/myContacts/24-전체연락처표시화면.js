//전체 연락처 표시 화면 만들기

//관련파일
// ./routes/contactRoutes-3.js
// ./controllers/contactController-9.js
// ./views/index-1.ejs

const express = require("express");
const dbConnect = require("./config/dbConnect");

const app = express();

//뷰엔진 설정하기
app.set("view engine", "ejs");
app.set("views", "./views");

const port = 3000;

//static폴더(정적폴더 - css,js,img 정적 자원이 있는 폴더)
//public이라는 이름으로 폴더 지정 - ejs views폴더에서 마치 현재 폴더처럼 사용할 수 있다.
app.use(express.static("./public"));

dbConnect();

app.use(express.json());
app.use(express.urlencoded({ extended:true }));

app.use("/contacts", require("./routes/contactRoutes"));//contactRoutes-3.js

app.listen(port, ()=>{
    console.log("3000번 포트에서 서버 실행 중...");
});