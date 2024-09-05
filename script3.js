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

        const methodIndex = headers.indexOf("선종");
        const reasonIndex = headers.indexOf("용접방법");
        const reason2Index = headers.indexOf("사유코드 설명");

        if (methodIndex === -1 || reasonIndex === -1 || reason2Index === -1) {
          console.error("필요한 열이 없습니다.");
          return;
        }

        // 선종별 데이터 집계 및 정렬
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

        // 선종별 용접 방법 및 사유코드 설명 데이터 집계
        const reasonCountsByMethod = rows.reduce((acc, row) => {
          const method = row[methodIndex];
          const reason = row[reasonIndex];
          const reason2 = row[reason2Index];
          if (method && reason && reason2) {
            if (!acc[method]) acc[method] = {};
            if (!acc[method][reason]) acc[method][reason] = {};
            acc[method][reason][reason2] =
              (acc[method][reason][reason2] || 0) + 1;
          }
          return acc;
        }, {});

        // 초기화된 그래프
        const ctxMethod = document
          .getElementById("methodChart")
          .getContext("2d");
        const ctxReason = document
          .getElementById("reasonChart")
          .getContext("2d");
        const ctxReason2 = document
          .getElementById("reason2Chart")
          .getContext("2d");

        const methodChart = new Chart(ctxMethod, {
          type: "doughnut",
          data: {
            labels: methodLabels,
            datasets: [
              {
                label: "선종 비율",
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

        // 초기화된 용접 방법 그래프
        const reasonChart = new Chart(ctxReason, {
          type: "doughnut",
          data: {
            labels: [],
            datasets: [
              {
                label: "선종별 용접 방법 비율",
                data: [],
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

        // 초기화된 사유코드 설명 그래프
        const reason2Chart = new Chart(ctxReason2, {
          type: "doughnut",
          data: {
            labels: [],
            datasets: [
              {
                label: "용접 방법별 사유코드 설명 비율",
                data: [],
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

        // 용접 방법 그래프 클릭 이벤트 처리
        document
          .getElementById("methodChart")
          .addEventListener("click", function (event) {
            const activePoints = methodChart.getElementsAtEventForMode(
              event,
              "nearest",
              { intersect: true },
              true
            );
            if (activePoints.length) {
              const method = methodLabels[activePoints[0].index];
              const reasonCounts = reasonCountsByMethod[method] || {};
              const reasonLabels = Object.keys(reasonCounts);
              const reasonValues = Object.values(reasonCounts).map((reason) =>
                Object.values(reason).reduce((sum, val) => sum + val, 0)
              );

              reasonChart.data.labels = reasonLabels;
              reasonChart.data.datasets[0].data = reasonValues;
              reasonChart.update();

              // 용접 방법 클릭 시 사유코드 설명 그래프 업데이트
              document
                .getElementById("reasonChart")
                .addEventListener("click", function (event) {
                  const activeReasonPoints =
                    reasonChart.getElementsAtEventForMode(
                      event,
                      "nearest",
                      { intersect: true },
                      true
                    );
                  if (activeReasonPoints.length) {
                    const reason = reasonLabels[activeReasonPoints[0].index];
                    const reason2Counts = reasonCounts[reason] || {};
                    const reason2Labels = Object.keys(reason2Counts);
                    const reason2Values = Object.values(reason2Counts);

                    reason2Chart.data.labels = reason2Labels;
                    reason2Chart.data.datasets[0].data = reason2Values;
                    reason2Chart.update();
                  }
                });
            }
          });
      };

      reader.readAsArrayBuffer(file);
    }
  });
