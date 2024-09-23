const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.static("public"));

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "8818",
  database: "sh1",
});

// 연도 목록을 가져오는 엔드포인트
app.get("/years", (req, res) => {
  pool.query(
    "SELECT DISTINCT YEAR(등록일) AS year FROM sh1.two_line ORDER BY year ASC",
    (err, results) => {
      if (err) {
        console.error(err);
        res.status(500).send("Server Error");
        return;
      }
      res.json(results.map((row) => row.year));
    }
  );
});

// 등록구분별 건수를 가져오는 엔드포인트
app.get("/registrationProgress", (req, res) => {
  const year = req.query.year;
  pool.query(
    `
    SELECT 등록구분, COUNT(*) AS count
    FROM sh1.two_line
    WHERE YEAR(등록일) = ?
    GROUP BY 등록구분
    `,
    [year],
    (err, results) => {
      if (err) {
        console.error(err);
        res.status(500).send("Server Error");
        return;
      }
      res.json({
        labels: results.map((row) => row.등록구분),
        values: results.map((row) => row.count),
      });
    }
  );
});

// 프로젝트별 건수를 가져오는 엔드포인트
app.get("/projectProgress", (req, res) => {
  const year = req.query.year;
  pool.query(
    `
    SELECT 프로젝트, COUNT(*) AS count
    FROM sh1.two_line
    WHERE YEAR(등록일) = ?
    GROUP BY 프로젝트
    `,
    [year],
    (err, results) => {
      if (err) {
        console.error(err);
        res.status(500).send("Server Error");
        return;
      }
      res.json({
        labels: results.map((row) => row.프로젝트),
        values: results.map((row) => row.count),
      });
    }
  );
});

// 프로젝트별 진행 상태 항목 수를 가져오는 엔드포인트 (연도 추가)
app.get("/projectStatus", (req, res) => {
  const year = req.query.year; // 요청한 연도 가져오기
  pool.query(
    `
      SELECT 진행상태, 프로젝트, COUNT(*) AS 항목수
      FROM sh1.two_line
      WHERE YEAR(등록일) = ?  -- 요청한 연도에 맞춰 필터링
      GROUP BY 진행상태, 프로젝트
      ORDER BY 진행상태, 프로젝트
      `,
    [year],
    (err, results) => {
      if (err) {
        console.error(err);
        res.status(500).send("Server Error");
        return;
      }
      res.json(results);
    }
  );
});

// 프로젝트별 완료율을 가져오는 엔드포인트
app.get("/projectCompletion", (req, res) => {
  pool.query(
    `
    WITH 총항목수 AS (
      SELECT 프로젝트, COUNT(*) AS 총항목수
      FROM sh1.two_line
      GROUP BY 프로젝트
    ),
    완료항목수 AS (
      SELECT 프로젝트, COUNT(*) AS 완료항목수
      FROM sh1.two_line
      WHERE 진행상태 = '완료'
      GROUP BY 프로젝트
    )
    SELECT t.프로젝트, COALESCE(c.완료항목수, 0) AS 완료항목수, t.총항목수,
    ROUND((COALESCE(c.완료항목수, 0) / t.총항목수) * 100, 2) AS 진행률
    FROM 총항목수 t
    LEFT JOIN 완료항목수 c ON t.프로젝트 = c.프로젝트
    ORDER BY t.프로젝트;
    `,
    (err, results) => {
      if (err) {
        console.error(err);
        res.status(500).send("Server Error");
        return;
      }
      res.json(results);
    }
  );
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
