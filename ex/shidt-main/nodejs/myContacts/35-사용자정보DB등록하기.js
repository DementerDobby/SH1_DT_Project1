//관리자 등록하기
//사용자 정보 DB에 등록하기

//암호(비밀번호)를 암호화하여 DB에 저장하기
//BCrypt 모듈을 사용하여 사용자 정보를 암호화(해시함수)하여 DB에 저장한다.
//해시 : 특정 키워드(문자열)을 통해 암호화하는 방법, 단방향이다(원문을 알 수 없다.)
//npm i bcrypt

//로그인 관련파일
// ./routes/loginRoutes-4.js  up
// ./controllers/loginController-4.js  up
// ./views/home-2.ejs
// ./views/register-1.ejs

//관련파일(그대로)
// ./routes/contactRoutes-5.js
// ./controllers/contactController-15.js
// ./views/index-4.ejs 
// ./views/add-2.ejs  
// ./views/update-3.ejs

const express = require("express");
const dbConnect = require("./config/dbConnect");
const methodOverride = require("method-override");

const app = express();

//뷰엔진 설정하기
app.set("view engine", "ejs");
app.set("views", "./views");

const port = 3000;

//public폴더
app.use(express.static("./public"));
//method-override 미들웨어 등록
app.use(methodOverride("_method"));

dbConnect();

app.use(express.json());
app.use(express.urlencoded({ extended:true }));

app.use("/", require("./routes/loginRoutes"));
app.use("/contacts", require("./routes/contactRoutes"));

app.listen(port, ()=>{
    console.log("3000번 포트에서 서버 실행 중...");
});