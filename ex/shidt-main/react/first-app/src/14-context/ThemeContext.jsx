import React from "react";

//Context는 전역 상태 변수 저장소이다.
const ThemeContext = React.createContext();
ThemeContext.displayName = "ThemeContext";

export default ThemeContext;
