import { PropsWithChildren } from "react";
import styled from "styled-components";
import React from "react";

const EnhancedButtonStyle = styled.button`
  background: green;
  color: white;
  border: none;
  border-radius: 10px;
  margin-top: 4px;
  font-size: 14px;
  padding: 4px;
`;

function EnhancedButton(p: PropsWithChildren<any>) {
  return <EnhancedButtonStyle {...(p ?? "")}>{p.children}</EnhancedButtonStyle>;
}

export default EnhancedButton;
