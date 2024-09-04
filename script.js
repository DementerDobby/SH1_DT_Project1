document
  .getElementById("fileInput")
  .addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = function (e) {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const json = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

        const headers = json[0];
        const rows = json.slice(1);

        const methodIndex = headers.indexOf("용접방법");
        const operatorIndex = headers.indexOf("용접사성명");
        const errorIndex = headers.indexOf("오차율");
        const reasonIndex = headers.indexOf("사유코드 설명");
        const lineIndex = headers.indexOf("선종");

        if (
          methodIndex === -1 ||
          operatorIndex === -1 ||
          errorIndex === -1 ||
          reasonIndex === -1 ||
          lineIndex === -1
        ) {
          console.error("필요한 열이 없습니다.");
          return;
        }

        // '용접방법' 데이터 집계 및 정렬
        const methodCount = rows.reduce((acc, row) => {
          const method = row[methodIndex];
          if (method) {
            acc[method] = (acc[method] || 0) + 1;
          }
          return acc;
        }, {});

        const sortedMethods = Object.entries(methodCount).sort(
          (a, b) => b[1] - a[1]
        );
        const methodLabels = sortedMethods.map(([method]) => method);
        const methodValues = sortedMethods.map(([, count]) => count);

        // '인원별 오차율 평균' 데이터 집계 및 정렬
        const operatorErrorRate = rows.reduce((acc, row) => {
          const operator = row[operatorIndex];
          const errorRate = parseFloat(row[errorIndex]);
          if (operator && !isNaN(errorRate)) {
            if (!acc[operator]) acc[operator] = { sum: 0, count: 0 };
            acc[operator].sum += errorRate;
            acc[operator].count += 1;
          }
          return acc;
        }, {});

        const operatorAverages = Object.entries(operatorErrorRate)
          .map(([operator, { sum, count }]) => ({
            operator,
            average: sum / count,
          }))
          .filter(({ average }) => average > 0) // 0 이하 제외
          .sort((a, b) => b.average - a.average); // 내림차순 정렬

        const operatorLabels = operatorAverages.map(({ operator }) => operator);
        const operatorValues = operatorAverages.map(({ average }) => average);

        // '사유코드 설명' 데이터 집계 및 정렬
        const reasonCount = rows.reduce((acc, row) => {
          const reason = row[reasonIndex];
          if (reason) {
            acc[reason] = (acc[reason] || 0) + 1;
          }
          return acc;
        }, {});

        const sortedReasons = Object.entries(reasonCount).sort(
          (a, b) => b[1] - a[1]
        );
        const reasonLabels = sortedReasons.map(([reason]) => reason);
        const reasonValues = sortedReasons.map(([, count]) => count);

        // '선종'별 오차율 평균 데이터 집계 및 정렬
        const lineErrorRate = rows.reduce((acc, row) => {
          const line = row[lineIndex];
          const errorRate = parseFloat(row[errorIndex]);
          if (line && !isNaN(errorRate)) {
            if (!acc[line]) acc[line] = { sum: 0, count: 0 };
            acc[line].sum += errorRate;
            acc[line].count += 1;
          }
          return acc;
        }, {});

        const lineAverages = Object.entries(lineErrorRate)
          .map(([line, { sum, count }]) => ({
            line,
            average: sum / count,
          }))
          .filter(({ average }) => average > 0) // 0 이하 제외
          .sort((a, b) => b.average - a.average); // 내림차순 정렬

        const lineLabels = lineAverages.map(({ line }) => line);
        const lineValues = lineAverages.map(({ average }) => average);

        // 차트 생성
        const ctxMethod = document
          .getElementById("methodChart")
          .getContext("2d");
        new Chart(ctxMethod, {
          type: "doughnut",
          data: {
            labels: methodLabels,
            datasets: [
              {
                label: "용접 방법 비율",
                data: methodValues,
                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(54, 162, 235, 0.2)",
                  "rgba(255, 206, 86, 0.2)",
                  "rgba(75, 192, 192, 0.2)",
                  "rgba(153, 102, 255, 0.2)",
                  "rgba(255, 159, 64, 0.2)",
                ],
                borderColor: [
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                  "rgba(75, 192, 192, 1)",
                  "rgba(153, 102, 255, 1)",
                  "rgba(255, 159, 64, 1)",
                ],
                borderWidth: 1,
              },
            ],
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: "top",
              },
              tooltip: {
                callbacks: {
                  label: function (tooltipItem) {
                    const label = tooltipItem.label || "";
                    if (label) {
                      return `${label}: ${tooltipItem.raw}건`;
                    }
                    return "";
                  },
                },
              },
            },
          },
        });

        const ctxOperator = document
          .getElementById("operatorChart")
          .getContext("2d");
        new Chart(ctxOperator, {
          type: "doughnut",
          data: {
            labels: operatorLabels,
            datasets: [
              {
                label: "인원별 오차율 평균",
                data: operatorValues,
                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(54, 162, 235, 0.2)",
                  "rgba(255, 206, 86, 0.2)",
                  "rgba(75, 192, 192, 0.2)",
                  "rgba(153, 102, 255, 0.2)",
                  "rgba(255, 159, 64, 0.2)",
                ],
                borderColor: [
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                  "rgba(75, 192, 192, 1)",
                  "rgba(153, 102, 255, 1)",
                  "rgba(255, 159, 64, 1)",
                ],
                borderWidth: 1,
              },
            ],
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: "top",
              },
              tooltip: {
                callbacks: {
                  label: function (tooltipItem) {
                    const label = tooltipItem.label || "";
                    if (label) {
                      return `${label}: ${tooltipItem.raw.toFixed(2)}%`;
                    }
                    return "";
                  },
                },
              },
            },
          },
        });

        const ctxReason = document
          .getElementById("reasonChart")
          .getContext("2d");
        new Chart(ctxReason, {
          type: "doughnut",
          data: {
            labels: reasonLabels,
            datasets: [
              {
                label: "사유코드 설명 비율",
                data: reasonValues,
                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(54, 162, 235, 0.2)",
                  "rgba(255, 206, 86, 0.2)",
                  "rgba(75, 192, 192, 0.2)",
                  "rgba(153, 102, 255, 0.2)",
                  "rgba(255, 159, 64, 0.2)",
                ],
                borderColor: [
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                  "rgba(75, 192, 192, 1)",
                  "rgba(153, 102, 255, 1)",
                  "rgba(255, 159, 64, 1)",
                ],
                borderWidth: 1,
              },
            ],
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: "top",
              },
              tooltip: {
                callbacks: {
                  label: function (tooltipItem) {
                    const label = tooltipItem.label || "";
                    if (label) {
                      return `${label}: ${tooltipItem.raw}건`;
                    }
                    return "";
                  },
                },
              },
            },
          },
        });

        const ctxLine = document.getElementById("lineChart").getContext("2d");
        new Chart(ctxLine, {
          type: "doughnut",
          data: {
            labels: lineLabels,
            datasets: [
              {
                label: "선종별 오차율 평균",
                data: lineValues,
                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(54, 162, 235, 0.2)",
                  "rgba(255, 206, 86, 0.2)",
                  "rgba(75, 192, 192, 0.2)",
                  "rgba(153, 102, 255, 0.2)",
                  "rgba(255, 159, 64, 0.2)",
                ],
                borderColor: [
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                  "rgba(75, 192, 192, 1)",
                  "rgba(153, 102, 255, 1)",
                  "rgba(255, 159, 64, 1)",
                ],
                borderWidth: 1,
              },
            ],
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: "top",
              },
              tooltip: {
                callbacks: {
                  label: function (tooltipItem) {
                    const label = tooltipItem.label || "";
                    if (label) {
                      return `${label}: ${tooltipItem.raw.toFixed(2)}%`;
                    }
                    return "";
                  },
                },
              },
            },
          },
        });
      };

      reader.readAsArrayBuffer(file);
    }
  });
