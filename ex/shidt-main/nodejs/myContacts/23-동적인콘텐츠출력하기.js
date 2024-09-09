//뷰템플릿엔진을 사용하여 동적인 콘텐츠 출력하기

//관련파일
// ./routes/contactRoutes-3.js
// ./controllers/contactController-8.js
// ./views/getAll-2.ejs

//컨트롤러에서 템플릿(ejs) 파일로 값 넘기기
// res.render( ejs파일명, {변수이름: 데이터} );
// res.render( "getAll-2", {heading: "User List"} );

//템플릿 파일에서 동적인 콘텐츠 처리하기
// <%= 변수 %>
// <% 자바스크립트 코드 %>
// <%- HTML 코드 %>
// <%- include('include/header') %> 헤더/푸터 중복되기 때문에 임포트한다.

const express = require("express");
const dbConnect = require("./config/dbConnect");

const app = express();

//뷰엔진 설정하기
app.set("view engine", "ejs");
app.set("views", "./views");

const port = 3000;

dbConnect();

app.use(express.json());
app.use(express.urlencoded({ extended:true }));

app.use("/contacts", require("./routes/contactRoutes"));//contactRoutes-3.js

app.listen(port, ()=>{
    console.log("3000번 포트에서 서버 실행 중...");
});