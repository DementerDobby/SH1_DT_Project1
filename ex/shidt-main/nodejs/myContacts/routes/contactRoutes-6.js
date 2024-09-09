const express = require("express");
const router = express.Router();
const cookieParser = require("cookie-parser");
const checkLogin = require("../middleware/checkLogin");

const { 
    getAllContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact,
    addContactForm
} 
= require("../controllers/contactController");

//미들웨어 등록
router.use(cookieParser());

//로그인체크를 먼저하고, 그다음 next()함수를 통해 두번째 콜백함수 실행.
router.route("/").get(checkLogin, getAllContacts);
router.route("/add")
    .get(checkLogin, addContactForm)
    .post(checkLogin, createContact);
router.route("/:id")
    .get(checkLogin, getContact)
    .put(checkLogin, updateContact)
    .delete(checkLogin, deleteContact);

module.exports = router;