//사용자 인증
//세션 처리하기

//세션 관리 - 미들웨어
//npm i express-session connect-mongo

const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const MongoStore = require("connect-mongo");
require("dotenv").config();

const app = express();
app.use(cookieParser());

//미들웨어 express-session 등록
app.use(
    session({
        name: "connect.sid", //connect.sid이 기본값, 유니크아이디
        secret: "secret code", //암호화 seed 문구
        resave: false, //세션정보의 변경이 있을 때만 저장
        saveUninitialized: true, //초기화되지 않는 세션정보도 저장
        store: MongoStore.create({ mongoUrl: process.env.DB_CONNECT }),
        cookie: { maxAge: 60 * 60 * 24 * 1000 } //쿠키 유효기간이 24시간으로 설정
    })
);

app.get("/", (req, res) =>{
    if(req.session.count){ //클라에 세션정보가 있으면(재방문 시)
        req.session.count++;
        res.write("<p>count: " + req.session.count + "</p>");
        res.end();
    }else{ //첫방문 시
        req.session.count = 1;
        res.send("첫 번째 방문입니다.");
    }
});

app.get("/session", (req,res)=>{
    console.log(req.session);
    res.send("세션 정보 조회")
});

app.get("/delete-session",(req,res)=>{
    req.session.destroy((err)=>{
        if(err){
            console.log(err);
        }else{
            res.clearCookie("connect.sid");
            res.send("세션 삭제");
        }
    });
});

app.listen(5000, ()=>{
    console.log("5000번 포트에서 서버 실행중...");
});



