import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Alert, Accordion, Container, Row } from "react-bootstrap";
import styled from "styled-components";

//프로젝트 순서
//1. CRA로 리액트 프로젝트 만들기
// 내문서>react> npx create-react-app dashborad
//2. 프로젝트 폴더로 이동하기
// 내문서>react> cd dashboard
//3. 프로젝트 시작하기
// 내문서>react>dashboard> npm start
//4. 프로젝트 파일 정리
// test파일, vital파일, 로고파일, App.js 필요없는 컴퍼넌트 지움, index.js - vital정리

//리액트에 부트스트랩 사용하기
//1.bootstrap 관련 모듈 설치하기
//  npm install react-bootstrap bootstrap
//2. bootstrap.min.css import하기
//App.js에
//import 'bootstrap/dist/css/bootstrap.min.css';
//3. 컴포넌트 임포트해서 사용하기
//참조: https://react-bootstrap.netlify.app/docs/components/accordion
//4. styled-component와 bootstrap 함께 사용하기
// npm i styled-components

const styles = {
  marginTop: 10,
  height: 100,
  width: 100,
  backgroundColor: "green",
};
const styles2 = {
  marginTop: 10,
  height: 100,
  backgroundColor: "brown",
};
const styles3 = {
  marginTop: 10,
  height: 100,
  backgroundColor: "orange",
};
// styled component와 bootstrap를 함께 적용하기
const StyledButton = styled(Button)`
  // css문법을 사용한다.
  color: cyan;
  font-size: 20px;
  margin: 10px;
  border: 2px solid blue;
  border-radius: 3px;
  background-color: gray;
`;

function App() {
  return (
    <div className="App">
      <StyledButton as="input" type="button" value="스타일드 버튼" />
      <Container>
        <Row>
          <div
            style={styles2}
            className="col-6 d-flex justify-content-center align-items-center"
          >
            <h3>Hello</h3>
          </div>
          <div style={styles3} className="col-6">
            <h3>React</h3>
          </div>
        </Row>
      </Container>

      {/* JSX에서 동작할 때 CSS 적용 */}
      {/* {} : JSX에서 JS를 사용할 때 */}
      {/* {} : JS 객체 - KeyValue */}
      <h1 style={{ backgroundColor: "green", color: "orange" }}>Hello React</h1>

      <div style={{ height: 100, width: 100, backgroundColor: "green" }}></div>

      <div style={styles}></div>

      <Button as="input" type="button" value="버튼" />

      <Alert key="success" variant="success">
        This is a "success" alert—check it out!
      </Alert>

      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default App;
