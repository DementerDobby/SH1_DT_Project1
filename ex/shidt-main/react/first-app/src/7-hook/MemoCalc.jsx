import React, { useState, useMemo } from "react";

function MemoCalc() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  // count 값이 변경될 때만, 복잡한 계산 함수가 실행됩니다.
  const expensiveCalculation = useMemo(() => {
    console.log("Expensive calculation running...");
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += i;
    }
    result += count;
    return result;
  }, [count]);

  return (
    <div>
      <h1>useMemo Example</h1>
      <p>Expensive Calculation Result: {expensiveCalculation}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment Count ({count})
      </button>
      <br />
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type something"
      />
    </div>
  );
}

export default MemoCalc;
