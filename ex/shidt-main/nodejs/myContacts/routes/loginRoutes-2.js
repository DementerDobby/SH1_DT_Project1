const express = require("express");
const router = express.Router();
const { getLogin, loginUser } = require("../controllers/loginController-2");

//getLogin : 로그인폼 렌더
//loginUser : 로그인 처리(액션)
router.route("/").get(getLogin).post(loginUser);

module.exports = router;