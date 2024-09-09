import React from "react";
import ReactDOM from "react-dom/client"; //React.js client Next.js/server
// import App from "./App";
// import Book from "./3-jsx/Book";
// import VM from "./3-jsx/VendingMachine";
// import Clock from "./4-element/Clock";
// import ConfirmDialog from "./4-element/ConfirmDialog";
// import Comment from "./5-props/Comment";
// import CommentList from "./5-props/CommentList";
// import NotificationList from "./6-state/NotificationList";
// import Counter2 from "./7-hook/Counter2";
//import Accommodate from "./7-hook/Accommodate";
// import ConfirmButton from "./8-event/ConfirmButton2";
//import LandingPage from "./9-conditional-render/LandingPage";
// import AttendanceBook from "./10-list/AttendanceBook";
//import FileUpload from "./11-form/Calculator";
// import Calculator from "./12-shared-state/Calculator";
// import ProfileCard from "./13-inheritance/ProfileCard";
//import DarkOrLight from "./14-context/DarkOrLight";
// import MemoCalc from "./7-hook/MemoCalc";
// import Sample3 from "./15-style/Sample3";
import ChartApp from "./16-chart/ChartApp";

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<App />);
//root.render(<Book name="리액트기초" price="1000" />);
//root.render(<VM price="1000" />);
root.render(<ChartApp />);
