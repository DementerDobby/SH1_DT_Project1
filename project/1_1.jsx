import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";
import { HeatMap } from "recharts";

const data = [
  { name: "프로젝트 A", 과제수: 12 },
  { name: "프로젝트 B", 과제수: 8 },
  { name: "프로젝트 C", 과제수: 15 },
  // 추가 데이터
];

const heatmapData = [
  { 부서: "부서 A", 월: "2024-01", 출도: 5 },
  { 부서: "부서 A", 월: "2024-02", 출도: 8 },
  { 부서: "부서 B", 월: "2024-01", 출도: 10 },
  { 부서: "부서 B", 월: "2024-02", 출도: 6 },
  // 추가 데이터
];

const App = () => {
  return (
    <div>
      <h1>프로젝트별 과제 수</h1>
      <BarChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="과제수" fill="#8884d8" />
      </BarChart>

      <h1>부서별 월별 출도 패턴</h1>
      <HeatMap data={heatmapData} xKey="월" yKey="부서" />
    </div>
  );
};

export default App;
