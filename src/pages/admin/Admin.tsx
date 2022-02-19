import { ethers } from "ethers";
import { Web3Provider } from "@ethersproject/providers";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import StyledAdmin from "./StyledAdmin";
import { Blocker__factory } from "../../generated/smartcontract/types/ethers-contracts";
import EnhancedInput from "../../Component/EnhancedInput/EnhancedInput";
import LoaderSub from "../../subscribtions/loader/loader";
import EnhancedButton from "../../Component/EnhancedButton/EnhancedButton";
import ToastSub from "../../subscribtions/toast/toast";
const Admin = () => {
  const provider = useRef<Web3Provider>();
  const [walletAddr, setWalletAddr] = useState("");
  useEffect(() => {
    provider.current = new ethers.providers.Web3Provider(
      window.ethereum,
      80001
    );
  }, []);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setWalletAddr(event.currentTarget.value);
  };
  const addWallet = async () => {
    if (!provider.current) {
      provider.current = new ethers.providers.Web3Provider(
        window.ethereum,
        80001
      );
    }
    let Blocklist = Blocker__factory.connect(
      process.env.REACT_APP_CONTRACT_ADDRESS ?? "",
      provider.current
    );
    Blocklist = Blocklist.connect(provider.current.getSigner());
    LoaderSub.next("Waiting for request");
    try {
      await Blocklist.authorizeUser(walletAddr);
    } catch (error: any) {
      ToastSub.next(error.message);
    } finally {
      LoaderSub.next(false);
    }
  };

  const removeWallet = async () => {
    if (!provider.current) {
      provider.current = new ethers.providers.Web3Provider(
        window.ethereum,
        80001
      );
    }
    let Blocklist = Blocker__factory.connect(
      process.env.REACT_APP_CONTRACT_ADDRESS ?? "",
      provider.current
    );
    Blocklist = Blocklist.connect(provider.current.getSigner());
    LoaderSub.next("Waiting for request");
    try {
      await Blocklist.unAuthorizeUser(walletAddr);
    } catch (error: any) {
      ToastSub.next(error.message);
    } finally {
      LoaderSub.next(false);
    }
  };
  return (
    <StyledAdmin>
      <h1>Admin</h1>
      <EnhancedInput
        bg="#747474"
        onChange={handleInputChange}
        pColor="#ffffff"
        placeholder="Wallet Address"
        value={walletAddr}
      ></EnhancedInput>
      <div className="btn-actions">
        <EnhancedButton onClick={addWallet}>Authorize</EnhancedButton>
        <EnhancedButton onClick={removeWallet}>Remove access</EnhancedButton>
      </div>
    </StyledAdmin>
  );
};

export default Admin;
