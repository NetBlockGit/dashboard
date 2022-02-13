import React from "react";
import StyleWallet from "./StyleWallet";

type props = { placeholder: string; [key: string]: any };

export default function Wallet(p: props): React.ReactElement {
  return (
    <StyleWallet>
      <div className="boxcontainer">
        <div className="Wallet">
          <span className="iconify" data-icon="logos:metamask-icon"></span>
          <span className="padding2">{p.placeholder}</span>
        </div>
      </div>
    </StyleWallet>
  );
}
