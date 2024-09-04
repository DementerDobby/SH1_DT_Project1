import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import { Line, Bar } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
);

function App() {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/data")
      .then((response) => {
        const data = response.data;

        // Transform the data into the format required by Chart.js
        const formattedData = {
          labels: data.map((_, index) => `Data ${index + 1}`),
          datasets: [
            {
              type: "line",
              label: "검사길이",
              data: data.map((item) => item.검사길이),
              borderColor: "rgba(75,192,192,1)",
              backgroundColor: "rgba(75,192,192,0.2)",
              fill: false,
            },
            {
              type: "bar",
              label: "불량길이",
              data: data.map((item) => item.불량길이),
              backgroundColor: "rgba(255,99,132,0.5)",
              borderColor: "rgba(255,99,132,1)",
              borderWidth: 1,
            },
          ],
        };

        setChartData(formattedData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  if (!chartData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <h1>Mixed Chart</h1>
      <Line data={chartData} />
    </div>
  );
}

export default App;
