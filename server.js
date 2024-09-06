const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const app = express();
const port = 3000;

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
      년도,
      월,
      총계획수량,
      총실적수량
    FROM
      monthly_summary2
    ORDER BY
      년도,
      월;
  `;

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
