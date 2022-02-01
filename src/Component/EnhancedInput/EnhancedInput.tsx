import styled from "styled-components";
import React, { ChangeEventHandler } from "react";

const EnhancedInputStyled = styled.input`
  background: #009818;
  border-radius: 22px;
  border: none;
  padding: 10px;
  outline: none;
  ::placeholder {
    color: white;
  }
`;

type Props = {
  value: any;
  onChange: ChangeEventHandler;
  placeholder: string;
};

function EnhancedInput(p: Props) {
  return <EnhancedInputStyled {...p}></EnhancedInputStyled>;
}

export default EnhancedInput;
