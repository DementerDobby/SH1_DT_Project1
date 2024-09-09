const asyncHandler = require("express-async-handler");

// @desc 로그인폼(화면)
// @route GET /
const getLogin = (req, res) => {
    res.render("home-1");
};

module.exports = { getLogin };
