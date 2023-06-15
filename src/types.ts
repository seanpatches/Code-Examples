import { Transaction } from 'algosdk';

export enum ConnectionTypes {
  myAlgo = "MyAlgo",
  pera = "Pera"
}

export enum TransactionStatusTypes {
  fail,
  success
}

export type SuggestedParameters = {
  flatFee: boolean,
  fee: number,
  firstRound: number,
  lastRound: number,
  genesisID: string,
  genesisHash: string,
}

export type FormattedPeraTransaction = Transaction | {
  from: string; 
  to: string; 
  amount: number; 
  type: string; 
  assetIndex: number; 
  note: Uint8Array; 
  flatFee: boolean; 
  fee: number; 
  firstRound: number; 
  lastRound: number; 
  genesisID: string; 
  genesisHash: string; 
}

export type FormattedMyAlgoTransaction = Transaction | {
  from: string;
  to: string;
  amount: number;
  type: string;
  assetIndex: number;
  note: Uint8Array;
  flatFee: boolean;
  fee: number;
  firstRound: number;
  lastRound: number;
  genesisID: string;
  genesisHash: string;
}