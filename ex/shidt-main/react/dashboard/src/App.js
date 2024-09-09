import "./App.css";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import styled from "styled-components";
import { fetchWeldingList } from "./apiService";

const preset = {
  labels: ["FCAW111", "EGW", "FCSA", "FAB", "SAW"], // 초기 레이블
  datasets: [
    {
      type: "line", // 라인 차트 타입
      label: "line", // 라인 차트 레이블
      backgroundColor: "rgb(255, 99, 132)", // 라인 차트 배경색
      data: [12, 19, 3, 5, 20], // 라인 차트 데이터
      borderColor: "red", // 라인 차트 경계선 색
      borderWidth: 2, // 라인 차트 경계선 두께
    },
    {
      type: "bar", // 바 차트 타입
      label: "bar", // 바 차트 레이블
      backgroundColor: "rgb(75, 192, 192)", // 바 차트 배경색
      data: [12, 19, 3, 5, 20], // 바 차트 데이터
    },
  ],
};

function App() {
  // 차트 데이터를 저장하는 상태와 API로 가져온 리스트 상태를 각각 선언
  const [list, setList] = useState([]);
  const [realData, setRealData] = useState(preset);

  // 컴포넌트가 처음 렌더링될 때 API에서 데이터를 가져오는 useEffect 훅
  useEffect(() => {
    const getList = async () => {
      // API에서 데이터를 가져오는 함수
      const fetchedList = await fetchWeldingList();
      setList(fetchedList); // 가져온 데이터를 list 상태에 저장
      console.log("fetchedList:", fetchedList);

      // API에서 가져온 데이터를 기반으로 레이블과 데이터 생성
      const labels = fetchedList.data.map((w_data) => w_data.w_method); // 용접 방법(w_method)을 레이블로 설정
      const w_defect_rates = fetchedList.data.map(
        (w_data) => w_data.w_defect_rate
      ); // 결함율(w_defect_rate)을 데이터로 설정

      // realData 상태를 API에서 가져온 데이터로 업데이트
      setRealData((prevData) => ({
        ...prevData, // 이전 상태 유지
        labels: labels, // 레이블을 가져온 데이터로 업데이트
        datasets: prevData.datasets.map((dataset) => ({
          ...dataset,
          data: w_defect_rates, // 각 차트의 데이터를 불량율로 업데이트
        })),
      }));
    };
    getList(); // 데이터 가져오기 실행
  }, []); // 빈 배열이므로 컴포넌트가 처음 렌더링될 때 한 번만 실행

  return (
    <div className="App">
      {/* realData 상태를 기반으로 차트를 그리며, 데이터 변경 시 차트가 다시 렌더링됨 */}
      <Line redraw={true} data={realData} />
    </div>
  );
}

export default App;
