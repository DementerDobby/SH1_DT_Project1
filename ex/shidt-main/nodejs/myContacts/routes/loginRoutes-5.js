const express = require("express");
const router = express.Router();
const { 
    getLogin, 
    loginUser,
    getRegister,
    registerUser
} = require("../controllers/loginController-5");

//getLogin : 로그인폼 렌더
//loginUser : 로그인 처리(액션)
router.route("/").get(getLogin).post(loginUser);
//getRegister : 사용자등록폼 렌더
//registerUser : 사용자등록 처리(액션)
router.route("/register").get(getRegister).post(registerUser);

module.exports = router;