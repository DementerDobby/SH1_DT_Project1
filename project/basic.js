const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "SH1",
  password: "0000",
  database: "new_schema1", // 데이터베이스 이름이 'new_schema1'이라 가정
});

connection.connect();

connection.query(
  "SELECT * FROM `new_schema1.5_welding`",
  (error, results, fields) => {
    if (error) throw error;
    console.log(results); // 쿼리 결과를 콘솔에 출력합니다.
  }
);

connection.end();
