/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface BlockerInterface extends utils.Interface {
  contractName: "Blocker";
  functions: {
    "addHostName(string)": FunctionFragment;
    "authorizeUser(address)": FunctionFragment;
    "authorizedUsers(address)": FunctionFragment;
    "getHostList()": FunctionFragment;
    "hostlist(uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "removeHostList(uint256)": FunctionFragment;
    "unAuthorizeUser(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "addHostName", values: [string]): string;
  encodeFunctionData(
    functionFragment: "authorizeUser",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "authorizedUsers",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getHostList",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "hostlist",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "removeHostList",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "unAuthorizeUser",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "addHostName",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "authorizeUser",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "authorizedUsers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getHostList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "hostlist", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeHostList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unAuthorizeUser",
    data: BytesLike
  ): Result;

  events: {};
}

export interface Blocker extends BaseContract {
  contractName: "Blocker";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BlockerInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    addHostName(
      newValue: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    authorizeUser(
      userAddr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    authorizedUsers(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    getHostList(overrides?: CallOverrides): Promise<[string[]]>;

    hostlist(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    removeHostList(
      index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unAuthorizeUser(
      userAddr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addHostName(
    newValue: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  authorizeUser(
    userAddr: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  authorizedUsers(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  getHostList(overrides?: CallOverrides): Promise<string[]>;

  hostlist(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  removeHostList(
    index: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unAuthorizeUser(
    userAddr: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addHostName(newValue: string, overrides?: CallOverrides): Promise<void>;

    authorizeUser(userAddr: string, overrides?: CallOverrides): Promise<void>;

    authorizedUsers(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    getHostList(overrides?: CallOverrides): Promise<string[]>;

    hostlist(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    removeHostList(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    unAuthorizeUser(userAddr: string, overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    addHostName(
      newValue: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    authorizeUser(
      userAddr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    authorizedUsers(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getHostList(overrides?: CallOverrides): Promise<BigNumber>;

    hostlist(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    removeHostList(
      index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unAuthorizeUser(
      userAddr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addHostName(
      newValue: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    authorizeUser(
      userAddr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    authorizedUsers(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getHostList(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    hostlist(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    removeHostList(
      index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unAuthorizeUser(
      userAddr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
