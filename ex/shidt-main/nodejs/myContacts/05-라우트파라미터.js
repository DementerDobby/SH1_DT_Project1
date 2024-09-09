//라우트 파라미터로 동적 URL 처리하기

//app.js
const express = require("express");
const app = express();

const port = 3000;

//인덱스(시작) 페이지 요청
app.get("/", (req, res) => {
    res.status(200); //상태코드를 200으로 설정
    res.send("Hello Express~");
});

//모든 연락처 가져오기
app.get("/contacts", (req, res) =>{
    res.status(200).send("Get Contacts");
});

//새 연락처 추가하기
app.post("/contacts", (req, res) =>{
    res.status(201).send("Create Contacts");
});

//연락처 상세보기
// get url : localhost:3000/contacts/10
app.get("/contacts/:id", (req, res)=>{
    res.status(200).send(`View Contacts for ID: ${req.params.id}`);
});

//연락처 수정하기
// put url : localhost:3000/contacts/10
app.put("/contacts/:id", (req, res)=>{
    res.status(200).send(`Update Contacts for ID: ${req.params.id}`);
});

//연락처 삭제하기
// delete url : localhost:3000/contacts/10
app.delete("/contacts/:id", (req, res)=>{
    res.status(200).send(`Delete Contacts for ID: ${req.params.id}`);
});

app.listen(port, ()=>{
    console.log(`${port}번 포트에서 서버 실행 중...`);
});