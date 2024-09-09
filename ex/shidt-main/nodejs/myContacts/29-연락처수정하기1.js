//연락처 수정하기1
//리스트화면의 수정아이콘 클릭하면 id값을 넘겨주기

//관련파일
// ./routes/contactRoutes-5.js
// ./controllers/contactController-13.js
// ./views/index-3.ejs
// ./views/add-2.ejs
// ./views/update-1.ejs
// ./views/update-2.ejs 데이터바인딩하기

const express = require("express");
const dbConnect = require("./config/dbConnect");

const app = express();

//뷰엔진 설정하기
app.set("view engine", "ejs");
app.set("views", "./views");

const port = 3000;

//public폴더
app.use(express.static("./public"));

dbConnect();

app.use(express.json());
app.use(express.urlencoded({ extended:true }));

app.use("/contacts", require("./routes/contactRoutes"));//contactRoutes-3.js

app.listen(port, ()=>{
    console.log("3000번 포트에서 서버 실행 중...");
});