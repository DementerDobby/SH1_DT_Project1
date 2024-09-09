import React, { useState } from "react";

//리액트 훅(Hook) : 리액트 함수에 갈고리(Hook)을 걸어 원하는 시점에 정해진 함수를
// 실행하도록 해주는 함수
// 함수형 컴퍼넌트에서 상태, 생명주기, 메모라이즈 등과 같은 기능을 지원함.

//useState 훅 : 컴퍼넌트 내부의 상태변수를 관리해 주는 기능 제공

function Counter(props) {
  //    상태변수  설정함수             초기값
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>총 {count}번 클릭했습니다.</p>
      <button onClick={() => setCount(count + 1)}>클릭하세요</button>
    </div>
  );
}

export default Counter;
