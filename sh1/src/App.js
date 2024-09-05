//참조: https://react-bootstrap.netlify.app/docs/components/accordion

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Alert, Accordion, Container, Row } from "react-bootstrap";
import styled from "styled-components";

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
  backgroundColor: "yellow",
};
const StyledButton = styled(Button)`
  // css문법을 사용한다.
  color: cyan;
  font-size: 20px;
  margin: 10px;
  border: 2px solid blue;
  border-radius: 3px;
  background-color: grey;
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
            <h3>SH1</h3>
          </div>
        </Row>
      </Container>

      <h1 style={{ backgroundColor: "green", color: "orange" }}>Hello SH1</h1>

      <div style={{ height: 100, width: 100, backgroundColor: "green" }}></div>
      <div style={styles}></div>

      <Button as="input" type="button" value="버튼" />
      <Alert key="danger" variant="danger">
        This is a "danger" alert—check it out!
      </Alert>
      <Accordion defaultActiveKey="0">
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
