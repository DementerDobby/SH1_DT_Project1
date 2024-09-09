//sendFile()함수를 통해 특정 html파일로 응답해 준다.
//html파일 : myContacts/assets/contacts.html 생성

const express = require("express");
const app = express();

const port = 3000;

app.get("/", (req, res)=>{
    res.status(200);
    console.log( __dirname );
    res.sendFile( __dirname + "/assets/contacts.html");
});

app.listen(port, ()=>{
    console.log(`${port}번 포트에서 서버 실행 중...`);
});