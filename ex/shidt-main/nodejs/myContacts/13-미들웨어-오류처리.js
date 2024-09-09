//미들웨어를 사용해 오류 처리하기

//상태코드와 err객체
//400 : Bad Request 클라이언트 요청이 잘못되었거나 유효하지 않음
//401 : Unauthorized 권한이 없어 거절되었지만 인증을 다시 시도할 수 있음.
//403 : Forbidden 권한이 없어 거절되었고, 인증을 시도하면 계속 거절됨.
//404 : Not Found 해당 데이터를 찾을 수 없습니다.
//      / /contacts /contacts/:id 3가지 외 다른 경로를 요청한 경우
//    ex)/add 없는 경로임. 404 오류
//500 : Internal Server Error 서버에서 요청을 처리하는 동안 오류가 발생함.

//오류처리를 위한 핸들러(콜백함수)
// const errorHandler = (err, req, res, next) => {
// };

//관련파일
//./routes/contactRoutes-2.js
//./middleware/errorHandler.js

const express = require("express");
const app = express();
const errorHandler = require("./middleware/errorHandeler")

const port = 3000;

app.get("/", (req, res) => {
    res.status(200).send("Hello Node!");
});

app.use(express.json());                      //(기본 query-string모듈 사용) 
app.use(express.urlencoded({extended:true})); //qs모듈을 사용해서 파싱

app.use("/contacts", require("./routes/contactRoutes"));

app.get("/test", (req,res,next) => {
    const error = new Error("테스트용 에러");
    error.status = 401;
    next(error);  //다음 미들웨어에 error를 넘김
});

app.use(errorHandler);

app.listen(port, ()=>{
    console.log("Server is running on port 3000");
});