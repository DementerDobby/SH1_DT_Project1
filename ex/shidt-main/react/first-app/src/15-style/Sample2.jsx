import React from "react";
import styled from "styled-components";

const Button = styled.button`
  color: grey;
  background: yellow;
  border: 2px solid green;
`;

//Button에 style을 추가한 RoundedButton 컴퍼넌트
const RoundedButton = styled(Button)`
  border-radius: 16px;
`;

function Sample(props) {
  return (
    <div>
      <Button>Normal</Button>
      <RoundedButton>Rounded</RoundedButton>
    </div>
  );
}

export default Sample;
