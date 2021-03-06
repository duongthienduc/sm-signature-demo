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
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export interface BSCBridgeInterface extends ethers.utils.Interface {
  functions: {
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "deployBridgeBep20Token(address,string,string)": FunctionFragment;
    "transit(address,uint256,string,bytes32)": FunctionFragment;
    "payback(address,uint256,string)": FunctionFragment;
    "transferTokenOwnership(address,address)": FunctionFragment;
    "addTokenToBridge(address,address)": FunctionFragment;
    "_verifyMessage(address,uint256,address,string,bytes32)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "deployBridgeBep20Token",
    values: [string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "transit",
    values: [string, BigNumberish, string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "payback",
    values: [string, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferTokenOwnership",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "addTokenToBridge",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "_verifyMessage",
    values: [string, BigNumberish, string, string, BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "deployBridgeBep20Token",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "transit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "payback", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferTokenOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addTokenToBridge",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_verifyMessage",
    data: BytesLike
  ): Result;

  events: {
    "Bridge(address,address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Payback(address,address,uint256,string)": EventFragment;
    "Transit(address,address,uint256,string)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Bridge"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Payback"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Transit"): EventFragment;
}

export type BridgeEvent = TypedEvent<
  [string, string],
  { slpToken: string; bepToken: string }
>;

export type BridgeEventFilter = TypedEventFilter<BridgeEvent>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export type PaybackEvent = TypedEvent<
  [string, string, BigNumber, string],
  { slpToken: string; to: string; amount: BigNumber; _metadata: string }
>;

export type PaybackEventFilter = TypedEventFilter<PaybackEvent>;

export type TransitEvent = TypedEvent<
  [string, string, BigNumber, string],
  { slpToken: string; to: string; amount: BigNumber; transitId: string }
>;

export type TransitEventFilter = TypedEventFilter<TransitEvent>;

export interface BSCBridge extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BSCBridgeInterface;

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
    /**
     * Returns the address of the current owner.
     */
    owner(overrides?: CallOverrides): Promise<[string]>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    deployBridgeBep20Token(
      _slpToken: string,
      _name: string,
      _symbol: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transit(
      _slpToken: string,
      _amount: BigNumberish,
      _transitId: string,
      _signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    payback(
      _bepToken: string,
      _amount: BigNumberish,
      _metadata: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferTokenOwnership(
      _bepToken: string,
      _to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addTokenToBridge(
      _bepToken: string,
      _slpToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    _verifyMessage(
      _slpToken: string,
      _amount: BigNumberish,
      _sender: string,
      _transitId: string,
      _secret: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  /**
   * Returns the address of the current owner.
   */
  owner(overrides?: CallOverrides): Promise<string>;

  /**
   * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
   */
  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  /**
   * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
   */
  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  deployBridgeBep20Token(
    _slpToken: string,
    _name: string,
    _symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transit(
    _slpToken: string,
    _amount: BigNumberish,
    _transitId: string,
    _signature: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  payback(
    _bepToken: string,
    _amount: BigNumberish,
    _metadata: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferTokenOwnership(
    _bepToken: string,
    _to: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addTokenToBridge(
    _bepToken: string,
    _slpToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  _verifyMessage(
    _slpToken: string,
    _amount: BigNumberish,
    _sender: string,
    _transitId: string,
    _secret: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    /**
     * Returns the address of the current owner.
     */
    owner(overrides?: CallOverrides): Promise<string>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    deployBridgeBep20Token(
      _slpToken: string,
      _name: string,
      _symbol: string,
      overrides?: CallOverrides
    ): Promise<void>;

    transit(
      _slpToken: string,
      _amount: BigNumberish,
      _transitId: string,
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    payback(
      _bepToken: string,
      _amount: BigNumberish,
      _metadata: string,
      overrides?: CallOverrides
    ): Promise<void>;

    transferTokenOwnership(
      _bepToken: string,
      _to: string,
      overrides?: CallOverrides
    ): Promise<void>;

    addTokenToBridge(
      _bepToken: string,
      _slpToken: string,
      overrides?: CallOverrides
    ): Promise<void>;

    _verifyMessage(
      _slpToken: string,
      _amount: BigNumberish,
      _sender: string,
      _transitId: string,
      _secret: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    "Bridge(address,address)"(
      slpToken?: string | null,
      bepToken?: string | null
    ): BridgeEventFilter;
    Bridge(
      slpToken?: string | null,
      bepToken?: string | null
    ): BridgeEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;

    "Payback(address,address,uint256,string)"(
      slpToken?: string | null,
      to?: string | null,
      amount?: null,
      _metadata?: null
    ): PaybackEventFilter;
    Payback(
      slpToken?: string | null,
      to?: string | null,
      amount?: null,
      _metadata?: null
    ): PaybackEventFilter;

    "Transit(address,address,uint256,string)"(
      slpToken?: string | null,
      to?: string | null,
      amount?: null,
      transitId?: null
    ): TransitEventFilter;
    Transit(
      slpToken?: string | null,
      to?: string | null,
      amount?: null,
      transitId?: null
    ): TransitEventFilter;
  };

  estimateGas: {
    /**
     * Returns the address of the current owner.
     */
    owner(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    deployBridgeBep20Token(
      _slpToken: string,
      _name: string,
      _symbol: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transit(
      _slpToken: string,
      _amount: BigNumberish,
      _transitId: string,
      _signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    payback(
      _bepToken: string,
      _amount: BigNumberish,
      _metadata: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferTokenOwnership(
      _bepToken: string,
      _to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addTokenToBridge(
      _bepToken: string,
      _slpToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    _verifyMessage(
      _slpToken: string,
      _amount: BigNumberish,
      _sender: string,
      _transitId: string,
      _secret: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    /**
     * Returns the address of the current owner.
     */
    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    deployBridgeBep20Token(
      _slpToken: string,
      _name: string,
      _symbol: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transit(
      _slpToken: string,
      _amount: BigNumberish,
      _transitId: string,
      _signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    payback(
      _bepToken: string,
      _amount: BigNumberish,
      _metadata: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferTokenOwnership(
      _bepToken: string,
      _to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addTokenToBridge(
      _bepToken: string,
      _slpToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    _verifyMessage(
      _slpToken: string,
      _amount: BigNumberish,
      _sender: string,
      _transitId: string,
      _secret: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
