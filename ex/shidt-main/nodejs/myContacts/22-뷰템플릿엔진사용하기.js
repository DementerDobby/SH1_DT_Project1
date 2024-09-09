//뷰 템플릿 엔진 사용하기

//템플릿 엔진이란?
//대부분의 웹사이트나 앱은 사용자의 동작에 반응하여
//서버로부터 자료를 가져와 바뀐 내용을 보여주는 SW이다.
//이렇게 내용이 동적으로 바뀌는 것을 처리할 때 사용하는 것이 템플릿 엔진이다.

//정적 HTML파일 + 동적인 데이터이 합쳐지는 것을 동적 바인딩이라 한다.
//데이터 바인딩을 통해 동적인 웹 페이지를 만들 수 있다.

//프론트 사이드 템플릿 엔진
//리액트(React.js JS번들) => Next.js(HTML응답)-검색엔진에 걸리도록
//뷰(Vue.js)

//서버 사이드 템플릿 엔진
//JS 서버 - EJS, 퍼그, 핸들바
//Java 서버 - 타임리프, 머스테치, JSP

//EJS 템플릿 모듈 설치하기
//npm i ejs

//관련파일
// ./routes/contactRoutes-3.js
// ./controllers/contactController-7.js
// ./views/getAll-1.ejs

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