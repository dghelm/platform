/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface ICrowdfundFactoryInterface extends ethers.utils.Interface {
  functions: {
    "getAddresses()": FunctionFragment;
    "getFundingParams()": FunctionFragment;
    "getNaming()": FunctionFragment;
    "logic()": FunctionFragment;
    "mediaAddress()": FunctionFragment;
    "poolId()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getAddresses",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getFundingParams",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getNaming", values?: undefined): string;
  encodeFunctionData(functionFragment: "logic", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "mediaAddress",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "poolId", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "getAddresses",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getFundingParams",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getNaming", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "logic", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "mediaAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "poolId", data: BytesLike): Result;

  events: {};
}

export class ICrowdfundFactory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: ICrowdfundFactoryInterface;

  functions: {
    getAddresses(overrides?: CallOverrides): Promise<[string[]]>;

    getFundingParams(overrides?: CallOverrides): Promise<[BigNumber[]]>;

    getNaming(overrides?: CallOverrides): Promise<[string[]]>;

    logic(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    mediaAddress(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    poolId(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  getAddresses(overrides?: CallOverrides): Promise<string[]>;

  getFundingParams(overrides?: CallOverrides): Promise<BigNumber[]>;

  getNaming(overrides?: CallOverrides): Promise<string[]>;

  logic(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  mediaAddress(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  poolId(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getAddresses(overrides?: CallOverrides): Promise<string[]>;

    getFundingParams(overrides?: CallOverrides): Promise<BigNumber[]>;

    getNaming(overrides?: CallOverrides): Promise<string[]>;

    logic(overrides?: CallOverrides): Promise<string>;

    mediaAddress(overrides?: CallOverrides): Promise<string>;

    poolId(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    getAddresses(overrides?: CallOverrides): Promise<BigNumber>;

    getFundingParams(overrides?: CallOverrides): Promise<BigNumber>;

    getNaming(overrides?: CallOverrides): Promise<BigNumber>;

    logic(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    mediaAddress(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    poolId(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getAddresses(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getFundingParams(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getNaming(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    logic(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    mediaAddress(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    poolId(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}