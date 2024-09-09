const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const app = express();
const port = 3000;

// CORS 설정
app.use(cors());

// 데이터베이스 연결
const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "8818",
  database: "sh1",
});

// 데이터 요청 처리
app.get("/data", (req, res) => {
  const year = req.query.year || "2020"; // 기본값은 2020년
  const line = req.query.line || "1"; // 기본값은 1호선

  const query = `
  SELECT *
  FROM sh1.line_four
  WHERE \`DP_BOM_내역\` = '철의장'
  LIMIT 10000;
`;

  connection.query(query, [year, line], (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: "Database query failed" });
      return;
    }
    res.json(results);
  });
});

app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
