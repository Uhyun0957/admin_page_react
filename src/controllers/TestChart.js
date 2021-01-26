import React from "react";

class TestChart extends React.Component {
  add = async (value) => {
    console.log("add");
  };

  remove = async (id) => {
    console.log("remove");
  };

  getAll = () => {
    console.log("getAll");
    return {
      name: "유현",
      age: 25,
      hi: "bye",
    };
  };
}

export default TestChart;
