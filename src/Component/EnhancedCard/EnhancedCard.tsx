import styled from "styled-components";

import React, { ChangeEventHandler } from "react";
import EnhancedInput from "../EnhancedInput/EnhancedInput";
import SwitchComponent from "../SwitchComponent/SwitchComponent";
import EnhancedButton from "../EnhancedButton/EnhancedButton";

const EnhancedCardStyled = styled.div`
  background: #1db235;
  color: white;
  border-radius: 20px;
  display: inline-flex;
  flex-direction: column;
  padding: 10px;
  box-shadow: -15px 16px 18px 7px rgba(0, 200, 44, 0.6);
  margin: 4px;
  .label-switch {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
type Props = {
  switchStatus: boolean;
  onSwitch: () => void;
  inputValue: string;
  handleInputChange: ChangeEventHandler<HTMLInputElement>;
  onSumit: () => void;
};

function EnhancedCard(p: Props) {
  const handleOnSwitch = () => {
    p.onSwitch();
  };

  return (
    <EnhancedCardStyled>
      <div className="label-switch">
        <h2>{p.switchStatus ? "Active" : "InActive"}</h2>
        <SwitchComponent isActive={p.switchStatus} onSwitch={handleOnSwitch} />
      </div>

      <EnhancedInput
        bg="#009818"
        pColor="#ffffff"
        value={p.inputValue}
        onChange={p.handleInputChange}
        placeholder="upstream dns"
      />
      <EnhancedButton onClick={p.onSumit}>Update</EnhancedButton>
    </EnhancedCardStyled>
  );
}

export default EnhancedCard;
