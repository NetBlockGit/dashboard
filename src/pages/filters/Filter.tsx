import React, { ChangeEvent, useEffect, useState } from "react";
import { ethers } from "ethers";
import { Blocker__factory } from "../../generated/smartcontract/types/ethers-contracts";
import StyledFilter from "./StyledFilter";
import ItemCard from "../../Component/ItemCard/ItemCard";
import EnhancedInput from "../../Component/EnhancedInput/EnhancedInput";
function Filters() {
  const [hostlists, setHostLists] = useState<string[]>([]);
  const [newHost, setNewHost] = useState<string>("");
  const fetchHostName = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum, 80001);

    const Blocklist = Blocker__factory.connect(
      process.env.REACT_APP_CONTRACT_ADDRESS ?? "",
      provider
    );
    setHostLists(await Blocklist.getHostList());
  };

  const addHostName = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum, 80001);

    let Blocklist = Blocker__factory.connect(
      process.env.REACT_APP_CONTRACT_ADDRESS ?? "",
      provider
    );

    Blocklist = Blocklist.connect(provider.getSigner());
    try {
      await Blocklist.addHostName(newHost);
      setHostLists([...hostlists, newHost]);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteHostName = (index: number) => {
    return async () => {
      const provider = new ethers.providers.Web3Provider(
        window.ethereum,
        80001
      );

      let Blocklist = Blocker__factory.connect(
        process.env.REACT_APP_CONTRACT_ADDRESS ?? "",
        provider
      );

      Blocklist = Blocklist.connect(provider.getSigner());
      try {
        await Blocklist.removeHostList(index);
        setHostLists(hostlists.filter((e, i) => i != index));
      } catch (error) {
        console.log(error);
      }
    };
  };
  useEffect(() => {
    window.ethereum.request({ method: "eth_requestAccounts" });
    fetchHostName();
  }, []);

  const handleOnChage = (e: ChangeEvent<HTMLInputElement>) => {
    setNewHost(e.currentTarget.value);
  };
  return (
    <StyledFilter>
      <h1>Filters</h1>
      {hostlists.map((e, i) => (
        <ItemCard
          icon="ant-design:delete-filled"
          key={i}
          text={e}
          onAction={deleteHostName(i)}
        />
      ))}
      <EnhancedInput
        bg="#F3F3F3"
        pColor="#868686ede"
        placeholder="New host"
        value={newHost}
        onChange={handleOnChage}
      />
      <button onClick={addHostName}>Add</button>
    </StyledFilter>
  );
}

export default Filters;
