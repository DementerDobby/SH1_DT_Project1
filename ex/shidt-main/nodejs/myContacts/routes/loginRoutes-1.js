const express = require("express");
const router = express.Router();
const { getLogin } = require("../controllers/loginController-1");

router.route("/").get(getLogin);

module.exports = router;