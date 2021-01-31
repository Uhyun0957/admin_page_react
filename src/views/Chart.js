import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";
import styled from "styled-components";

// https://risha-lee.tistory.com/19 참고'

const Container = styled.div`
  background: lightgreen;
  #legend {
    margin: 20px;
    /* flex-direction: row; */
    background: lightcoral;
    ul {
      display: flex;
    }
    li {
      padding: 20px;
      color: white;
    }
  }
`;

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
      let ins = instance.chartInstance.getDatasetMeta(index);
      let bg = instance.props.data.datasets[index].borderColor;
      if (index !== 0) ins.hidden = true;
      item.addEventListener("click", (e) => handling(e, index));
      item.style.backgroundColor = ins.hidden ? bg : "white";
      item.style.color = ins.hidden ? "white" : bg;
      item.style.border = `1px solid ${bg}`;
    });
  };

  const handling = (e, index) => {
    let ctx = instance.chartInstance;
    let meta = ctx.getDatasetMeta(index);
    meta.hidden = !meta.hidden;

    let target = e.target;
    let bg = target.style.backgroundColor;
    let fc = target.style.color;
    console.log("bg", bg, "fc", fc);
    target.style.color = fc === "white" ? bg : "white";
    target.style.backgroundColor = bg === "white" ? fc : "white";

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
        borderColor: "#F7464A",
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
    ],
  };
  return (
    <Container style={{ width: "800px", height: "1000px" }}>
      차트
      <div className="button_area" id="legend"></div>
      <Line
        ref={(input) => {
          instance = input;
        }}
        options={{ responsive: true, legend: false }}
        data={data}
      />
    </Container>
  );
};

export default Chart;
