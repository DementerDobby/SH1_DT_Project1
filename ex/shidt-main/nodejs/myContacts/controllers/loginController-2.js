const asyncHandler = require("express-async-handler");

// @desc 로그인폼(화면)
// @route GET /
const getLogin = (req, res) => {
    res.render("home-2");
};

// @desc 로그인 처리(액션)
// @route POST /
const loginUser = asyncHandler(async (req,res) =>{
    //로그인 처리를 위해서는 아이디/암호를 로그인폼으로부터 받아온다.
    const { username, password } = req.body;
    if( username === "admin" && password === "1234" ){
        res.send("로그인 성공!");
    }else{
        res.send("로그인 실패!");
    }
});

module.exports = { getLogin, loginUser };
