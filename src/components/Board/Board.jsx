import React, { useEffect, useState } from "react";

import Selectbox from "../Item/Selectbox";
import BoardView from "./styles";

const Board = ({ title }) => {
  const [selectList, setSelectList] = useState(["(가)서버", "(나)서버", "(다)서버"]);

  const changeServer = ({ index, value }) => {
    console.log(index, value, "로 서버 변경");
  };

  return (
    <BoardView>
      <h3>{title}</h3>
      <div className="select_part">
        <span>(최근 1시간)</span>
        <Selectbox list={selectList} changing={changeServer} />
      </div>
    </BoardView>
  );
};

export default Board;
