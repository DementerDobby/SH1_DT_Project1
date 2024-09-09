import { useState, useCallback } from "react";
import ThemeContext from "./ThemeContext";
import MainContent from "./MainContent";

//리액트의 성능향상 훅(Hook)
//1. useMemo : 미리 계산된 값을 가지고 있다고 반환해줌.(캐싱)
//2. useCallback : 한번 호출한 함수의 반환값을 가지고 있다가 반환해 줌(캐싱).

function DarkOrLight(props) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = useCallback(() => {
    if (theme == "light") {
      setTheme("dark");
    } else if (theme == "dark") {
      setTheme("light");
    }
  }, [theme]);

  return (
    // Context를 전달받는 컴퍼넌트는 Provider로 감싸줘야 된다.
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <MainContent />
    </ThemeContext.Provider>
  );
}

export default DarkOrLight;
