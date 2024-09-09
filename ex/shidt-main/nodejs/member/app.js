let express = require("express");
let app = express();
let bodyParser = require("body-parser");
let mysql = require("mysql");

//모듈 설치
//npm i express body-parser mysql

const port = process.env.PORT || 3030;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//connect mysql database
let conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "mydb",
});

conn.connect();

app.get("/", (req, res) => {
  return res.json({
    error: false,
    message: "Welcome to RESTfull api with node js.",
  });
});

app.listen(port, () => {
  console.log("Listening on port %d", port);
});

module.exports = app;
