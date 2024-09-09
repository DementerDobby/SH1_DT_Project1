const express = require("express");
const methodOverride = require("method-override");

const app = express();

//뷰엔진 설정하기
app.set("view engine", "ejs");
app.set("views", "./views");

const port = 3000;

//public폴더
app.use(express.static("./public"));
//method-override 미들웨어 등록
app.use(methodOverride("_method"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("test", {});
});

app.listen(port, () => {
  console.log("3000번 포트에서 서버 실행 중...");
});
