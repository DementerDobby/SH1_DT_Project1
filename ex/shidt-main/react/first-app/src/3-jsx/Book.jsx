import React from "react";

function Book(props) {
  return (
    <>
      <h1>{`이 책의 이름은 ${props.name}입니다.`}</h1>
      <h1>{`이 책의 가격은 ${props.price}입니다.`}</h1>
    </>
  );
}

export default Book;
