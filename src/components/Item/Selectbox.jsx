import React, { useState } from "react";
import styled from "styled-components";

import icon_select from "../../assets/icon/select.png";

const SelectBoxView = styled.div`
  position: relative;
  .select {
    display: flex;
    justify-content: space-between;
    position: relative;
    height: 30px;
    border: 0.8px solid #d1d1d1;
    span {
      padding-left: 8px;
      display: flex;
      align-items: center;
      width: 81%;
      height: 100%;
      font-size: 12px;
      border-right: 0.8px solid #d1d1d1;
      background: #fff;
    }
    button {
      display: block;
      width: 30px;
      height: 100%;
      background: url(${icon_select}) no-repeat;
      background-size: 10px 8px;
      background-position: 55% 55%;
      background-color: #f2f2f2;
    }
  }
  .options {
    display: none;
    position: absolute;
    top: 28px;
    width: 100%;
    font-size: 12px;
    li {
      padding-left: 8px;
      display: flex;
      align-items: center;
      height: 30px;
      text-align: left;
      border-left: 1px solid #d1d1d1;
      border-right: 1px solid #d1d1d1;
      border-top: 1px solid #d1d1d1;
      background: #fff;
      cursor: pointer;
      &:last-child {
        border-bottom: 1px solid #d1d1d1;
      }
      &.selected,
      &:hover {
        color: #ff0006;
        border: 1px solid #ffc6c7;
        background-color: #fff6f6;
        \ & + li {
          border-top: none;
        }
      }
    }
  }
`;

const Selectbox = ({ list, changing }) => {
  const [selected, setSelected] = useState(list[0]);

  return (
    <SelectBoxView>
      <div className="select">
        <span>{selected}</span>
        <button
          onClick={({
            target: {
              parentNode: select,
              parentNode: { nextSibling: options },
            },
          }) => {
            options.style.display = "block";
            select.style.borderBottom = "none";
          }}
        ></button>
      </div>
      <ul
        className="options"
        onMouseDown={({
          target,
          target: {
            parentNode: options,
            parentNode: { previousSibling: select },
          },
        }) => {
          options.style.display = "none";
          select.style.borderBottom = "1px solid #d1d1d1";
          if (selected === list[target.accessKey]) {
            return;
          }
          setSelected(list[target.accessKey]);
          changing({ index: target.accessKey, value: list[target.accessKey] });
          target.classList.add("selected");
        }}
      >
        {list &&
          list.map((item, index) => (
            <li key={index} accessKey={index} value={item} className={selected === item ? "selected" : "none"}>
              {item}
            </li>
          ))}
      </ul>
    </SelectBoxView>
  );
};

export default Selectbox;
