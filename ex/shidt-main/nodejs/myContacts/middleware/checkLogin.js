const jwt = require("jsonwebtoken");
require("dotenv").config();
const jwtSecret = process.env.JWT_SECRET;

//no-cache : 브라우저에서 캐시를 재사용하지 않고 서버에서 응답을 매번 다시 받아야 한다.
//no-store : 서버의 응답을 캐시에 저장하지 않는다.
//must-revalidate : 만일 캐시에 있는 정보를 사용하더라도 반드시 서버에 다시 확인하여 한다.
const checkLogin = async (req, res, next) =>{
    res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
    const token = req.cookies.token;
    if( !token ){
        return res.redirect("/"); //토큰값(인증)이 없으면, 로그인 화면으로 강제 이동
    }
    try{
        const decoded = jwt.verify(token, jwtSecret); //사용자가 보낸 토큰을 복호화한다.
        req.username = decoded.username;
        next(); //다음 미들웨어로 실행을 옮김
    }catch(err){
        return res.status(401).json({message:"로그인이 필요합니다."});
    }
};

module.exports = checkLogin;