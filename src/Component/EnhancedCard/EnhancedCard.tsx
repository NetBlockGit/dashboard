import styled from "styled-components";

import React, { ChangeEventHandler, FormEvent, useState } from "react";
import EnhancedInput from "../EnhancedInput/EnhancedInput";
import SwitchComponent from "../SwitchComponent/SwitchComponent";

const EnhancedCardStyled = styled.div`
  background: #1db235;
  color: white;
  border-radius: 20px;
  display: inline-flex;
  flex-direction: column;
  padding: 10px;
  box-shadow: -15px 16px 18px 7px rgba(0, 200, 44, 0.6);
  .label-switch {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
type Props = {
  onSwitch: () => void;
  inputValue: string;
  handleInputChange: ChangeEventHandler<HTMLInputElement>;
  onSumit: () => void;
};

function EnhancedCard(p: Props) {
  const [isActive, setIsActive] = useState(false);
  const handleOnSwitch = (e: FormEvent<HTMLInputElement>) => {
    setIsActive(e.currentTarget.checked);
    p.onSwitch();
  };
  return (
    <EnhancedCardStyled>
      <div className="label-switch">
        <h2>{isActive ? "Active" : "InActive"}</h2>
        <SwitchComponent onSwitch={handleOnSwitch} />
      </div>

      <EnhancedInput
        bg="#1db235"
        pColor="#fffff"
        value={p.inputValue}
        onChange={p.handleInputChange}
        placeholder="upstream dns"
      />
      <button onClick={p.onSumit}>Update</button>
    </EnhancedCardStyled>
  );
}

export default EnhancedCard;
