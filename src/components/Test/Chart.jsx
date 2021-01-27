import React from "react";
import { Line } from "react-chartjs-2";

import ChartStyles from "./styles";

const Chart = ({ list }) => {
  const setGradientColor = (canvas, color) => {
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, color);
    gradient.addColorStop(0.95, "rgba(133,55,144,0.5)");
    return gradient;
  };

  const getCharData = (canvas) => {
    const data = list;
    if (data.datasets) {
      let color = ["rgba(255, 0, 255, 0.75", "rgba(0, 255, 0, 0.75"];
      data.datasets.forEach((set, i) => {
        set.backgroundColor = setGradientColor(canvas, color[i]);
        set.borderColor = "white";
        set.borderWidth = 2;
      });
    }
    return data;
  };

  return (
    <ChartStyles>
      <div style={{ position: "relative", width: 800, height: 750 }}>
        <h3>Cart Samples</h3>
        <Line options={{ responsive: true }} data={getCharData} />
      </div>
    </ChartStyles>
  );
};

export default Chart;
