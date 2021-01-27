import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    ${reset};
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
      font-family: 'Noto Sans KR', sans-serif;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
    img {
        width: 100%;
    }
    ul, ol {
        list-style-type: none;
    }
    input {
        font-family: inherit;
        color: inherit;
        font-size: inherit;
        outline: none;
    }
    input[type="radio"] {
        appearance: none;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 22px;
        height: 22px;
        border-radius: 50%;
        &:checked {
            &::after {
            content: "";
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: #ee670d;
            background-size: 100% 100%;
            }
        }
    }
    input[type="checkbox"] {
        appearance: none;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0;
        width: 25px;
        height: 25px;
        border: 1px solid #cdcdcd;
        border-radius: 5px;
        :checked {
            border: none;
            background: #ee670d;
            &::after {
            content: "";
            display: inline-block;
            width: 16px;
            height: 12px;
            background:red;
            }
        }
    }
    select {
        appearance: none;
        color: inherit;
        font-family: inherit;
        background: red;
        background-size: 14px 8px;
        background-position: 94%;
        background-color: #fff;
        outline: none;
        cursor: pointer;
    }
    textarea {
        font-family: inherit;
        color: inherit;
        border: none;
        outline: none;
        resize: none;
        &::-webkit-scrollbar {
        width: 10px;
        }
        &::-webkit-scrollbar-thumb {
        background-color: #79779a;
        border-radius: 20px;
        background-clip: padding-box;
        border: 2px solid transparent;
        }
     }
    button {
        font-family: inherit;
        font-size: inherit;
        border: none;
        background: none;
        outline: none;
        cursor: pointer;
    }
    .container {
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;

        display: flex;
        background:lightgreen;
    }
`;
