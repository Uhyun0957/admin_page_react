import React, { Component } from "react";
import { Line } from "react-chartjs-2";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        labels: ["1", "2", "3", "4", "5"],
        datasets: [
          { label: "Video Mades", backgroundColor: "rgba(255, 0, 255, 0.75", data: [15, 24, 7, 13, 21, 9, 19] },
          { label: "Subscriptions", backgroundColor: "rgba(0, 255, 0, 0.75", data: [22, 0, 18, 20, 8, 10, 17] },
        ],
      },
    };
  }

  setGradientColor = (canvas, color) => {
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, color);
    gradient.addColorStop(0.95, "rgba(133,55,144,0.5)");
    return gradient;
  };

  getCharData = (canvas) => {
    const { data } = this.state;
    if (data.datasets) {
      let color = ["rgba(255, 0, 255, 0.75", "rgba(0, 255, 0, 0.75"];
      data.datasets.forEach((set, i) => {
        set.backgroundColor = this.setGradientColor(canvas, color[i]);
        set.borderColor = "white";
        set.borderWidth = 2;
      });
    }
    return data;
  };

  render() {
    return (
      <div style={{ position: "relative", width: 800, height: 750 }}>
        <h3>Cart Samples</h3>
        <Line options={{ responsive: true }} data={this.getCharData} />
      </div>
    );
  }
}
