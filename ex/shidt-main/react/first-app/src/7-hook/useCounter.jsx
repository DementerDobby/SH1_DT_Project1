import React, { useState } from "react";

function useCounter(initValue) {
  const [count, setCount] = useState(initValue);

  const addCount = () => setCount((count) => count + 1);
  const subCount = () => setCount((count) => Math.max(count - 1, 0));

  return [count, addCount, subCount];
}

export default useCounter;
