import styled from "styled-components";
import React from "react";

const ItemCardStyled = styled.div`
  background: #f3f3f3;
  border-radius: 18px;
  padding: 10px;
  box-shadow: 1px 1px 10px #adadad;
  margin: 10px 0;
  display: flex;
  .right-button {
    margin-left: auto;
  }
`;

type Props = {
  text: string;
  icon: string;
  onAction: () => void;
};

function ItemCard(p: Props) {
  return (
    <ItemCardStyled>
      {p.text}
      <div onClick={p.onAction} className="right-button">
        <span className="iconify" data-icon={p.icon}></span>
      </div>
    </ItemCardStyled>
  );
}

export default ItemCard;
