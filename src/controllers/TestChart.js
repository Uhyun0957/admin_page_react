import React from "react";

class TestChart extends React.Component {
  state = {
    data: {
      labels: ["1", "2", "3", "4", "5"],
      datasets: [
        { label: "Video Mades", backgroundColor: "rgba(255, 0, 255, 0.75", data: [15, 24, 7, 13, 21, 9, 19] },
        { label: "Subscriptions", backgroundColor: "rgba(0, 255, 0, 0.75", data: [22, 0, 18, 20, 8, 10, 17] },
      ],
    },
  };

  add = async (value) => {
    console.log("add " + value);
  };

  remove = async (id) => {
    console.log("remove");
  };

  getAll = () => {
    console.log("getAll");
    return this.state.data;
  };
}

export default TestChart;
