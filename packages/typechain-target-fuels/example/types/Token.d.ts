/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import type {
  Interface,
  FunctionFragment,
  DecodedValue,
  Contract,
  Overrides,
  BigNumberish,
  BytesLike,
  CallResult,
  ScriptTransactionRequest,
  TransactionResult,
} from "fuels";

export type ArgsInput = { receiver: string; amount: BigNumberish };

export type Args = { receiver: string; amount: bigint };

export type Ret1Input = { foo: string; bar: string };

export type Ret1 = { foo: string; bar: string };

export type Ret0Input = { sender: string; receiver: string; Ret1: Ret1Input };

export type Ret0 = { sender: string; receiver: string; Ret1: Ret1 };

interface TokenInterface extends Interface {
  submit: {
    mint: FunctionFragment;
    send: FunctionFragment;
    get_balance: FunctionFragment;
    return_array: FunctionFragment;
    return_struct: FunctionFragment;
  };
  submitResult: {
    mint: FunctionFragment;
    send: FunctionFragment;
    get_balance: FunctionFragment;
    return_array: FunctionFragment;
    return_struct: FunctionFragment;
  };
  dryRun: {
    mint: FunctionFragment;
    send: FunctionFragment;
    get_balance: FunctionFragment;
    return_array: FunctionFragment;
    return_struct: FunctionFragment;
  };
  dryRunResult: {
    mint: FunctionFragment;
    send: FunctionFragment;
    get_balance: FunctionFragment;
    return_array: FunctionFragment;
    return_struct: FunctionFragment;
  };
  simulate: {
    mint: FunctionFragment;
    send: FunctionFragment;
    get_balance: FunctionFragment;
    return_array: FunctionFragment;
    return_struct: FunctionFragment;
  };
  simulateResult: {
    mint: FunctionFragment;
    send: FunctionFragment;
    get_balance: FunctionFragment;
    return_array: FunctionFragment;
    return_struct: FunctionFragment;
  };
  prepareCall: {
    mint: FunctionFragment;
    send: FunctionFragment;
    get_balance: FunctionFragment;
    return_array: FunctionFragment;
    return_struct: FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "mint",
    values: [BigNumberish, BigNumberish, string, ArgsInput]
  ): Uint8Array;
  encodeFunctionData(
    functionFragment: "send",
    values: [BigNumberish, BigNumberish, string, ArgsInput]
  ): Uint8Array;
  encodeFunctionData(
    functionFragment: "get_balance",
    values?: undefined
  ): Uint8Array;
  encodeFunctionData(
    functionFragment: "return_array",
    values: [BigNumberish]
  ): Uint8Array;
  encodeFunctionData(
    functionFragment: "return_struct",
    values: [BigNumberish]
  ): Uint8Array;

  decodeFunctionData(functionFragment: "mint", data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: "send", data: BytesLike): DecodedValue;
  decodeFunctionData(
    functionFragment: "get_balance",
    data: BytesLike
  ): DecodedValue;
  decodeFunctionData(
    functionFragment: "return_array",
    data: BytesLike
  ): DecodedValue;
  decodeFunctionData(
    functionFragment: "return_struct",
    data: BytesLike
  ): DecodedValue;
}

export class Token extends Contract {
  interface: TokenInterface;
  submit: {
    mint(
      gas: BigNumberish,
      coins: BigNumberish,
      asset_id: string,
      args: ArgsInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<bigint>;

    send(
      gas: BigNumberish,
      coins: BigNumberish,
      asset_id: string,
      args: ArgsInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<void>;

    get_balance(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<bigint>;

    return_array(
      gas: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<[string, string]>;

    return_struct(
      arg0: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<Ret0>;
  };
  submitResult: {
    mint(
      gas: BigNumberish,
      coins: BigNumberish,
      asset_id: string,
      args: ArgsInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<TransactionResult<any>>;

    send(
      gas: BigNumberish,
      coins: BigNumberish,
      asset_id: string,
      args: ArgsInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<TransactionResult<any>>;

    get_balance(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<TransactionResult<any>>;

    return_array(
      gas: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<TransactionResult<any>>;

    return_struct(
      arg0: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<TransactionResult<any>>;
  };
  dryRun: {
    mint(
      gas: BigNumberish,
      coins: BigNumberish,
      asset_id: string,
      args: ArgsInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<bigint>;

    send(
      gas: BigNumberish,
      coins: BigNumberish,
      asset_id: string,
      args: ArgsInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<void>;

    get_balance(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<bigint>;

    return_array(
      gas: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<[string, string]>;

    return_struct(
      arg0: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<Ret0>;
  };
  dryRunResult: {
    mint(
      gas: BigNumberish,
      coins: BigNumberish,
      asset_id: string,
      args: ArgsInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<CallResult>;

    send(
      gas: BigNumberish,
      coins: BigNumberish,
      asset_id: string,
      args: ArgsInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<CallResult>;

    get_balance(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<CallResult>;

    return_array(
      gas: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<CallResult>;

    return_struct(
      arg0: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<CallResult>;
  };
  prepareCall: {
    mint(
      gas: BigNumberish,
      coins: BigNumberish,
      asset_id: string,
      args: ArgsInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ScriptTransactionRequest>;

    send(
      gas: BigNumberish,
      coins: BigNumberish,
      asset_id: string,
      args: ArgsInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ScriptTransactionRequest>;

    get_balance(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ScriptTransactionRequest>;

    return_array(
      gas: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ScriptTransactionRequest>;

    return_struct(
      arg0: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ScriptTransactionRequest>;
  };
  simulate: {
    mint(
      gas: BigNumberish,
      coins: BigNumberish,
      asset_id: string,
      args: ArgsInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<bigint>;

    send(
      gas: BigNumberish,
      coins: BigNumberish,
      asset_id: string,
      args: ArgsInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<void>;

    get_balance(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<bigint>;

    return_array(
      gas: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<[string, string]>;

    return_struct(
      arg0: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<Ret0>;
  };
  simulateResult: {
    mint(
      gas: BigNumberish,
      coins: BigNumberish,
      asset_id: string,
      args: ArgsInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<CallResult>;

    send(
      gas: BigNumberish,
      coins: BigNumberish,
      asset_id: string,
      args: ArgsInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<CallResult>;

    get_balance(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<CallResult>;

    return_array(
      gas: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<CallResult>;

    return_struct(
      arg0: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<CallResult>;
  };

  mint(
    gas: BigNumberish,
    coins: BigNumberish,
    asset_id: string,
    args: ArgsInput,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<bigint>;

  send(
    gas: BigNumberish,
    coins: BigNumberish,
    asset_id: string,
    args: ArgsInput,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<void>;

  get_balance(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<bigint>;

  return_array(
    gas: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<[string, string]>;

  return_struct(
    arg0: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Ret0>;
}
