import React from "react";
import styled from "styled-components";

//리액트에서 CSS를 구현하는 방법
//1. JS style속성
//2. styled-components 모듈 사용 : JSX-html문법, SC는 css문법을 그대로 따름.
// 모듈 설치
// npm i styled-components
//3. tailwind css 모듈을 사용

const Button = styled.button`
  // css문법 사용
  color: ${(props) => (props.dark ? "white" : "dark")};
  background: ${(props) => (props.dark ? "black" : "white")};
  border: 1px soild black;
`;

function Sample(props) {
  return (
    <div>
      <Button>Normal</Button>
      <Button dark="dark">Dark</Button>
    </div>
  );
}

export default Sample;
