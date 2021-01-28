import styled from "styled-components";

export default styled.div`
  padding-top: 75px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 511px;
  height: 460px;
  border: 0.8px solid #d1d1d1;
  background: #fff;
  h1 {
    margin-bottom: 15px;
    width: 236px;
  }
  h2 {
    margin-bottom: 60px;
    width: 98px;
  }
  .input_box {
    padding-bottom: 5px;
    margin-bottom: 22px;
    display: flex;
    align-items: center;
    width: 300px;
    font-size: 14px;
    border-bottom: 2px solid #afafaf;
    span {
      margin-right: 20px;
      display: inline-block;
      width: 25px;
      font-weight: 700;
    }
    input {
      padding: 5px 0;
      width: 100%;
      padding-left: 7px;
      border: none;
    }
  }
  button {
    width: 300px;
    height: 50px;
    color: #fff;
    font-size: 15px;
    font-weight: 700;
    background: #2d3135;
    transition: background 0.2s ease-in-out;
    &:hover {
      background: #1c2024;
    }
    &:active {
      background: #000000;
    }
  }
`;
