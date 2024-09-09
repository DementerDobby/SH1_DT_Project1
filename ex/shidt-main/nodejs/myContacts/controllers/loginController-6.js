const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;

// @desc 로그인폼(화면)
// @route GET /
const getLogin = (req, res) => {
    res.render("home-3");
};

// @desc 로그인 처리(액션)
// @route POST /
const loginUser = asyncHandler(async (req,res) =>{
    //로그인 처리를 위해서는 아이디/암호를 로그인폼으로부터 받아온다.
    const { username, password } = req.body;

    //JWT토큰기반의 로그인 인증 처리
    const user = await User.findOne({username});
    if(!user){
        return res.status(401).json({message:"일치하는 사용자가 없습니다."});
    }
    //DB의 사용자정보와 입력된 사용자정보가 일치하는지 확인
    const isMatch = await bcrypt.compare(password, user.password);
    if( !isMatch ){
        return res.status(401).json({message:"비밀번호가 일치하지 않습니다."});
    }
    //사용자 토큐먼트 id(랜덤생성)를 기반으로 토큰데이터 생성(발행)해줌.
    const token = jwt.sign({ id: user._id }, jwtSecret);
    res.cookie("token", token, {httpOnly:true});

    res.redirect("/contacts"); //로그인된 사용자만 연락처 리스트 화면으로 이동하도록 한다.
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

// @desc 로그아웃 처리
// @route GET /logout
const logout = (req, res) => {
    res.clearCookie("token");
    res.redirect("/"); //로그인화면으로 이동
};

module.exports = { getLogin, loginUser, getRegister, registerUser, logout };
