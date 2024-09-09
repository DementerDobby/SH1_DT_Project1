let express = require("express");
let app = express();
let mysql = require("mysql");
const cors = require("cors");

//모듈 설치
//npm i nodemon express mysql
//npm i cors ejs

//CORS 허용
app.use(
  cors({
    origin: "*", // 모든 출처 허용 옵션. true 를 써도 된다.
  })
);

const port = process.env.PORT || 3030;

//뷰엔진 설정하기
app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//connect mysql database
let conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "8818",
  database: "dashboard",
});

conn.connect();

app.get("/", (req, res) => {
  return res.json({
    error: false,
    message: "Welcome to dashboard node js.",
  });
});

// 대시보드 html 요청
app.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

// 용접불량율 리스트 요청 - REST API
// URL : GET localhost:3030/list
app.get("/list", (req, res) => {
  conn.query("SELECT * FROM welding", (error, results) => {
    if (error) throw error;

    let message = "";
    if (results === undefined || results.length == 0) {
      message = "welding table is empty";
    } else {
      message = "Successfully retrived all welding";
    }

    return res.json({
      error: false,
      message: message,
      data: results,
    });
  });
});

app.listen(port, () => {
  console.log("Listening on port %d", port);
});

module.exports = app;
