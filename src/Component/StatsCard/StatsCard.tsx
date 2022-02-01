import styled from "styled-components";

const StatsCardStyled = styled.div`
  box-shadow: 0px 0px 33px rgba(0, 0, 0, 0.14);
  border-radius: 20px;
  display: inline-flex;
  flex-direction: column;
  margin: 4px;
  padding: 10px;

  .desc {
    color: #656565;
  }
`;

import React from "react";

type Props = {
  total: number;
  desc: string;
};

function StatsCard(p: Props) {
  return (
    <StatsCardStyled>
      <h2 className="count">{p.total}</h2>
      <p className="desc">{p.desc}</p>
    </StatsCardStyled>
  );
}

export default StatsCard;
