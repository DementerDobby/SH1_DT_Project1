const express = require("express");
const cors = require("cors");
const app = express();

//CORS 허용
//cors 모듈 설치
//npm i cors
//cors 미들웨어 등록
app.use(
  cors({
    origin: "*", // 모든 출처 허용 옵션. true 를 써도 된다.
  })
);

const port = 3030; //리액트 3000, 노드서버 3030

app.use(express.json()); // For JSON payloads
app.use(express.urlencoded({ extended: true })); // For URL-encoded payloads

app.get("/", (req, res) => {
  res.status(200); //상태코드를 200으로 설정
  res.send("Hello Express~");
});

app.post("/signup", (req, res) => {
  const { username, password, gender } = req.body;
  console.log(username);
  console.log(password);
  console.log(gender);

  res.status(201).json({ username, password, gender });
});

app.listen(port, () => {
  console.log(`${port}번 포트에서 서버 실행 중`);
});
