import React, { useEffect, useState } from "react";

import Style_sidePanelTemplet from "./Style_sidePanelTemplet";
import Home_ItemComponnt from "./item_components/home/Home_ItemComponents";
import Filter_ItemComponnt from "./item_components/filter/Filter_ItemComponents";
import Admin_ItemComponnt from "./item_components/admin/Admin_ItemComponents";
import { ethers } from "ethers";
import { Blocker__factory } from "../../../generated/smartcontract/types/ethers-contracts";
import ToastSub from "../../../subscribtions/toast/toast";
import LoaderSub from "../../../subscribtions/loader/loader";
const SidePanelTemplet = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    checkIfAdmin();
  }, []);

  const checkIfAdmin = async () => {
    LoaderSub.next(true);

    const provider = new ethers.providers.Web3Provider(window.ethereum, 80001);

    const walletAddrOfSigner = await provider.getSigner().getAddress();
    const Blocklist = Blocker__factory.connect(
      process.env.REACT_APP_CONTRACT_ADDRESS ?? "",
      provider
    );
    try {
      const walletAddrOfAdmin = await Blocklist.owner();
      console.log(walletAddrOfAdmin);
      console.log(walletAddrOfSigner.toString());
      setIsAdmin(walletAddrOfAdmin == walletAddrOfSigner.toString());
    } catch (error: any) {
      ToastSub.next(error.message);
    } finally {
      LoaderSub.next(false);
    }
  };
  return (
    <Style_sidePanelTemplet>
      <div className="left-panel">
        <h1 className="bn">BlockNet</h1>
        <Home_ItemComponnt />
        <Filter_ItemComponnt />
        {isAdmin ? <Admin_ItemComponnt /> : ""}
      </div>
    </Style_sidePanelTemplet>
  );
};

export default SidePanelTemplet;
