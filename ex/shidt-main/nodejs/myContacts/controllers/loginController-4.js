const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");

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

// @desc 사용자등록폼
// @route GET /register 
const getRegister = (req, res) => {
    res.render("register-1");
};

// @desc 사용자등록 처리(액션)
// @route POST /register
const registerUser = asyncHandler(async (req, res) => {
    const { username, password, password2 } = req.body;
    if( !username || !password ){
        res.send("필수값이 없습니다.");
        return;
    }
    if( password === password2 ) {
        //사용자가 입력한 암호("1234")를 해시암호화 한다.
        //10 : 해시함수를 10번 수행한다.
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log( password);        
        console.log( hashedPassword );
        const user = await User.create({ username, password: hashedPassword });
        res.status(201).json({message: "사용자 등록되었습니다.", user })
    }else{
        res.send("비번과 비번2가 틀립니다.");
    }
});

module.exports = { getLogin, loginUser, getRegister, registerUser };
