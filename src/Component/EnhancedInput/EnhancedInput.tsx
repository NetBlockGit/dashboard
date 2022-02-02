import styled from "styled-components";
import React, { ChangeEventHandler } from "react";

type EProp = {
  bg: string;
  pColor: string;
};
const EnhancedInputStyled = styled.input<EProp>`
  background: ${(props) => props.bg};
  border-radius: 22px;
  border: none;
  padding: 10px;
  outline: none;
  ::placeholder {
    color: ${(props) => props.pColor};
  }
`;

type Props = {
  value: string;
  onChange: ChangeEventHandler;
  placeholder: string;
  bg: string;
  pColor: string;
};

function EnhancedInput(p: Props) {
  return <EnhancedInputStyled {...p}></EnhancedInputStyled>;
}

export default EnhancedInput;
