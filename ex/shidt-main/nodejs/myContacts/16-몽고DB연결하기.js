//몽고DB 연결하기

//관련파일
// ./routes/contactRoutes-2.js
// ./config/dbConnect.js
// ./.env
// .gitignore파일에 .env파일을 포함시켜야 됨. 

//.env에 DB_CONNECT 문자열(외부에 오픈되면 안되는 정보)을 저장하기
//dotenv 모듈을 설치하기
//npm i dotenv

const express = require("express");
const dbConnect = require("./config/dbConnect");

const app = express();

const port = 3000;

dbConnect();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req,res) => {
    res.send("Hello, Node!");
});

app.use("/contacts", require("./routes/contactRoutes"));

app.listen(port, ()=>{
    console.log("Server is running on port 3000");
});
