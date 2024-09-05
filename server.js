const express = require("express");
const mysql = require("mysql2");
const cors = require("cors"); // CORS 패키지 추가
const app = express();
const port = 3000;

// CORS 설정
app.use(cors());

const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "8818",
  database: "sh1",
});

app.get("/data", (req, res) => {
  const query = `
    SELECT 
        설계기능,
        GROUP_CONCAT(DISTINCT 도면종류 ORDER BY 도면종류 SEPARATOR ', ') AS 도면종류_리스트
    FROM 
        three_line
    GROUP BY 
        설계기능
    ORDER BY 
        설계기능;
`; //바꿀꺼

  connection.query(query, (error, results) => {
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
