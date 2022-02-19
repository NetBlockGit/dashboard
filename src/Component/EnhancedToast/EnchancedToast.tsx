import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ToastSub from "../../subscribtions/toast/toast";

const StyledEnhancedToast = styled.div`
  background: #d30000a4;
  backdrop-filter: blur(9px);
  position: fixed;
  left: 50%;
  top: 2%;
  display: flex;
  align-items: center;
  padding: 0 10px;
  border-radius: 12px;
  transform: translate(-50%, -150%);
  transition: 1s;

  &.active {
    transform: translate(-50%, 0%);
  }
`;

const EnhancedToast = () => {
  const [infoText, setInfoText] = useState("");
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    ToastSub.subscribe((v) => {
      setInfoText(v);
      setIsActive(true);
      setTimeout(() => {
        setIsActive(false);
      }, 2000);
    });
  }, []);
  return (
    <StyledEnhancedToast className={isActive ? "active" : ""}>
      <p>{infoText}</p>
    </StyledEnhancedToast>
  );
};

export default EnhancedToast;
