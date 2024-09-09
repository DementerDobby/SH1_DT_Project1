import styled from "styled-components";

const Wrapper = styled.div`
  padding: 1em;
  background: grey;
`;

const Title = styled.div`
  font-size: 1.5em;
  color: white;
  text-align: center;
`;

function Sample3(props) {
  return (
    <Wrapper>
      <Title>안녕, 리액트!</Title>
    </Wrapper>
  );
}

export default Sample3;
