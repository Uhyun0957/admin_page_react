import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";

// https://risha-lee.tistory.com/19 참고

let instance = null;

const Chart = () => {
  useEffect(() => {
    setChart();
  }, []);

  const setChart = () => {
    console.log("차트세팅");
    const legend = instance.chartInstance.generateLegend();
    document.getElementById("legend").innerHTML = legend;
    document.querySelectorAll("#legend li").forEach((item, index) => {
      item.addEventListener("click", (e) => handling(e, index));
    });
  };

  const handling = (e, index) => {
    let ctx = instance.chartInstance;
    let meta = ctx.getDatasetMeta(index);
    meta.hidden = !meta.hidden;
    // meta.update();
    // let item = meta.data;
    // console.log(item);
    // item.map((tem) => {
    //   tem.hidden = !tem.hidden;
    //   console.log((tem._options.borderColor = "white"));
    // });
    // meta.data.map(tem )
    // meta.data[index].hidden = !meta.data[index].hidden;
    // console.log((meta.data[index]._view.backgroundColor = "white"));
    ctx.update();
  };

  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        type: "line",
        label: "파랑",
        borderColor: "#1E90FF",
        fill: false,
        data: [
          Math.random() * 90000,
          Math.random() * 90000,
          Math.random() * 90000,
          Math.random() * 90000,
          Math.random() * 90000,
          Math.random() * 90000,
          Math.random() * 90000,
        ],
      },
      {
        type: "line",
        label: "빨강",
        backgroundColor: "#F7464A",
        data: [
          Math.random() * 90000,
          Math.random() * 90000,
          Math.random() * 90000,
          Math.random() * 90000,
          Math.random() * 90000,
          Math.random() * 90000,
          Math.random() * 90000,
        ],
      },
    ],
  };
  return (
    <div style={{ width: "800px", height: "1000px" }}>
      차트
      <div className="button_area" id="legend">
        <button
          style={{ background: "#854269", color: "white" }}
          onClick={() => {
            // handling();
          }}
        >
          라인범례
        </button>
        <button style={{ background: "#e5d2a6", color: "white" }}>막대범례</button>
      </div>
      <Line
        ref={(input) => {
          instance = input;
        }}
        options={{ responsive: true, legend: false }}
        data={data}
      />
    </div>
  );
};

export default Chart;
