// index.js
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// MySQL 데이터베이스 연결
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "8818",
  database: "new_schema1",
});

connection.connect();

// 데이터 쿼리 API
app.get("/data", (req, res) => {
  connection.query(
    "SELECT 검사길이, 불량길이 FROM welding_data",
    (error, results) => {
      if (error) throw error;
      res.json(results);
    }
  );
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
