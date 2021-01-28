import styled from "styled-components";

export default styled.div`
  padding: 24px 0;
  width: 715px;
  min-height: 440px;
  text-align: center;
  border: 0.8px solid #d1d1d1;
  background: #fff;
  &:not(:last-child) {
    margin-bottom: 14px;
  }
  h3 {
    font-size: 17px;
    font-weight: 700;
    line-height: 2.5;
  }
  .select_part {
    padding: 0 58px;
    display: flex;
    justify-content: space-between;
    > span {
      font-size: 12px;
      line-height: 2;
    }
    .select {
      width: 160px;
    }
  }
`;
