import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Controller from "../controllers/TestChart";
import Chart from "../components/Test/Chart";

const TestStyles = styled.div`
  background: lightgreen;
`;

const Test = () => {
  const controller = new Controller();
  const [chart, setChart] = useState({});

  useEffect(() => {
    setChart(controller.getAll());
  }, []);

  return (
    <TestStyles>
      <Link to="/login">test page</Link>

      <Chart list={chart} />

      <div>
        <input
          type="text"
          onKeyPress={({ key, target: { value } }) => {
            if (key === "Enter") {
              controller.add(value);
            }
          }}
        />
      </div>
    </TestStyles>
  );
};

export default Test;
