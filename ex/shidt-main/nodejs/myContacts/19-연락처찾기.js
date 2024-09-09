//몽고DB CRUD

//관련파일
// ./config/dbConnect.js
// ./routes/contactRoutes-3.js
// ./controllers/contactController-3.js

//@desc 연락처 찾기
//@route GET /contacts/:id

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