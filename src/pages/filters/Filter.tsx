import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { ethers } from "ethers";
import { Blocker__factory } from "../../generated/smartcontract/types/ethers-contracts";
import StyledFilter from "./StyledFilter";
import ItemCard from "../../Component/ItemCard/ItemCard";
import EnhancedInput from "../../Component/EnhancedInput/EnhancedInput";
import { Web3Provider } from "@ethersproject/providers";
import LoaderSub from "../../subscribtions/loader/loader";
function Filters() {
  const provider = useRef<Web3Provider>();
  const [hostlists, setHostLists] = useState<string[]>([]);
  const [newHost, setNewHost] = useState<string>("");

  useEffect(() => {
    fetchHostName();
  }, []);
  const fetchHostName = async () => {
    if (!provider.current)
      provider.current = new ethers.providers.Web3Provider(
        window.ethereum,
        80001
      );

    const Blocklist = Blocker__factory.connect(
      process.env.REACT_APP_CONTRACT_ADDRESS ?? "",
      provider.current
    );
    setHostLists(await Blocklist.getHostList());
  };

  const addHostName = async () => {
    if (!provider.current)
      provider.current = new ethers.providers.Web3Provider(
        window.ethereum,
        80001
      );

    let Blocklist = Blocker__factory.connect(
      process.env.REACT_APP_CONTRACT_ADDRESS ?? "",
      provider.current
    );
    Blocklist = Blocklist.connect(provider.current.getSigner());
    try {
      LoaderSub.next("Waiting for request");
      await Blocklist.addHostName(newHost);
      LoaderSub.next(false);
      setHostLists([...hostlists, newHost]);
    } catch (error) {
      LoaderSub.next(false);
      console.log(error);
    }
  };

  const deleteHostName = (index: number) => {
    return async () => {
      if (!provider.current)
        provider.current = new ethers.providers.Web3Provider(
          window.ethereum,
          80001
        );

      let Blocklist = Blocker__factory.connect(
        process.env.REACT_APP_CONTRACT_ADDRESS ?? "",
        provider.current
      );

      Blocklist = Blocklist.connect(provider.current.getSigner());
      try {
        LoaderSub.next("Waiting for request");
        await Blocklist.removeHostList(index);
        LoaderSub.next(false);
        setHostLists(hostlists.filter((_, i) => i != index));
      } catch (error) {
        console.log(error);
        LoaderSub.next(false);
      }
    };
  };

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
