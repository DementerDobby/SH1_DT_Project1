//미들웨어란?
//요청과 응답 중간에 있으면서, 요청을 처리하거나
//원하는 형태로 응답을 수정하는 함수 등을 미들웨어라고 한다.

//익스프레스에서 자주 사용하는 미들웨어는 라우터와 바디파서에 대해서 알아봅니다.

//미들웨어의 역할
//       <--------------- 미들웨어 -------------------->
//요청 -> req.body 파싱 -> 인증(로그인) -> 렌더링(뷰템플릿) -> 응답

//라우터 객체를 사용하여 라우팅 코드를 수정하기
const express = require("express");
const app = express();
const router = express.Router();

const port = 3000;

app.get("/",(req,res)=>{
    res.status(200).send("Hello Node!");
});

//모든 연락처 가져오기
router.get("/contacts",(req,res)=>{
    res.status(200).send("연락처 페이지");
});
//새 연락처 추가하기
router.post("/contacts",(req,res)=>{
    res.status(201).send("연락처 추가하기");
});
//연락처 상세보기
router.get("/contacts/:id",(req,res)=>{
    res.status(200).send(`연락처 상세보기: ID:${req.params.id}`);
});
//연락처 수정하기
router.put("/contacts/:id",(req,res)=>{
    res.status(200).send(`연락처 수정하기: ID:${req.params.id}`);
});
//연락처 삭제하기
router.delete("/contacts/:id",(req,res)=>{
    res.status(200).send(`연락처 삭제하기: ID:${req.params.id}`);
});

//라우터 app에 등록하기
app.use(router);

app.listen(port, ()=>{
    console.log("Server is running on port 3000");
});