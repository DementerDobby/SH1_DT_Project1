import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";

const MyChartComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/data")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        // Chart.js를 사용해 데이터를 시각화
        const ctx = document.getElementById("myChart").getContext("2d");
        new Chart(ctx, {
          type: "bar",
          data: {
            labels: data.map((item) => item.someLabelField), // x축 레이블
            datasets: [
              {
                label: "Score",
                data: data.map((item) => item.someDataField), // y축 데이터
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1,
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        });
      });
  }, []);

  return <canvas id="myChart" width="400" height="400"></canvas>;
};

export default MyChartComponent;
