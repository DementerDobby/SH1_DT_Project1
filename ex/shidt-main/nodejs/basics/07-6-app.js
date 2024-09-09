const user = require("./07-1-user.js");
//복수모듈 임포트하기
const greeting = require("./07-5-greeting.js");

greeting.hello( user );
greeting.buy( user );