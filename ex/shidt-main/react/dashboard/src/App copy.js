import "./App.css";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import styled from "styled-components";
import { fetchWeldingList } from "./apiService";

//리액트에서 chart.js 사용하기
//1. 모듈 설치하기
//npm install chart.js react-chartjs-2

let pre_data = {
  labels: ["FCAW111", "EGW", "FCSA", "FAB", "SAW"],
  datasets: [
    {
      type: "line",
      label: "line",
      backgroundColor: "rgb(255, 99, 132)",
      data: [12, 19, 3, 5, 20],
      borderColor: "red",
      borderWidth: 2,
    },
    {
      type: "bar",
      label: "bar",
      backgroundColor: "rgb(75, 192, 192)",
      data: [12, 19, 3, 5, 20],
    },
  ],
};

function App() {
  const [list, setList] = useState([]);
  const [realData, setRealData] = useState(pre_data);

  // setRealData(pre_data);

  useEffect(() => {
    const getList = async () => {
      const fetchedList = await fetchWeldingList();
      setList(fetchedList);
      console.log("fetchedList:" + fetchedList.data[0].w_method);

      // const labels = list.data.map((w_data) => {
      //   return w_data.w_method;
      // });
      // console.log(labels);
      // pre_data.labels = labels;
      // console.log(pre_data);

      // const w_defect_rates = list.data.map((w_data) => {
      //   return w_data.w_defect_rate;
      // });
      // console.log(w_defect_rates);

      // pre_data.datasets[0].data = w_defect_rates;
      // pre_data.datasets[1].data = w_defect_rates;
      // console.log(pre_data);

      pre_data.labels[0] = "12345";

      //setRealData(pre_data);
    };
    getList();
  }, []);

  return (
    <div className="App">
      <Line redraw={true} type="line" data={pre_data} />
    </div>
  );
}

export default App;
