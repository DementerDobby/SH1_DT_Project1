//몽고DB CRUD

//관련파일
// ./config/dbConnect.js
// ./routes/contactRoutes-3.js
// ./controllers/contactController-2.js

//@desc 연락처 추가하기
//@route POST /contacts

//http body
// {
//  "name": "hong",
//  "email": "hong@mail.com",
//  "phone": "010-1111-2222"
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