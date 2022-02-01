import styled from "styled-components";

const SwitchComponentStyled = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: #1db235;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    /* background-color: #2196f3; */
  }

  input:focus + .slider {
    /* box-shadow: 0 0 1px #2196f3; */
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;

import React, { ChangeEventHandler } from "react";

type Props = {
  onSwitch: ChangeEventHandler<HTMLInputElement>;
};

function SwitchComponent(p: Props) {
  return (
    <SwitchComponentStyled className="switch">
      <input type="checkbox" onChange={p.onSwitch} />
      <span className="slider round"></span>
    </SwitchComponentStyled>
  );
}

export default SwitchComponent;