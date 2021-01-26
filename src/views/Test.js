import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Controller from "../controllers/TestChart";

const TestStyles = styled.div`
  background: lightgreen;
`;

const Test = () => {
  const controller = new Controller();
  const [person, setPerson] = useState({});

  useEffect(() => {
    setPerson(controller.getAll());
  }, []);

  return (
    <TestStyles>
      <Link to="/login">test page</Link>
      <div>
        사람
        <span>이름 : {person.name}</span>
        <span>나이 : {person.age}</span>
        <span>안녕 : {person.hi}</span>
      </div>
      <div>
        <input
          type="text"
          onKeyPress={({ key }) => {
            if (key === "Enter") controller.add();
          }}
        />
      </div>
    </TestStyles>
  );
};

export default Test;
