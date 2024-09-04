const express = require("express");
const mysql = require("mysql");
const app = express();
const port = 3000;

const connection = mysql.createConnection({
  host: "localhost",
  user: "SH1",
  password: "8818",
  database: "exam",
});

connection.connect();

// 데이터베이스에서 데이터를 가져와서 API로 제공
app.get("/api/data", (req, res) => {
  connection.query(
    "SELECT * FROM `new_schema1.5_welding`",
    (error, results, fields) => {
      if (error) throw error;
      res.json(results); // JSON 형태로 데이터를 반환
    }
  );
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
