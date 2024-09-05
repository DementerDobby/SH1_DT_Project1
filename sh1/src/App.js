const express = require("express");
const mysql = require("mysql2");
const app = express();
const port = 3000;

// MySQL 데이터베이스 연결 설정
const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root", // MySQL 사용자명
  password: "8818", // MySQL 비밀번호
  database: "sh1", // 사용할 데이터베이스 이름
});

// API 엔드포인트: 원인코드별 갯수 데이터 제공
app.get("/data", (req, res) => {
  const query =
    "SELECT 원인코드, COUNT(*) AS count FROM one_line GROUP BY 원인코드";

  connection.query(query, (error, results) => {
    if (error) throw error;

    // 쿼리 결과를 클라이언트에 JSON 형식으로 반환
    res.json(results);
  });
});

// 정적 파일 제공 (HTML, JS)
app.use(express.static("public"));

// 서버 실행
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
