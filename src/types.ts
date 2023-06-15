import algosdk from 'algosdk';

export enum ConnectionTypes {
  myAlgo = "MyAlgo",
  pera = "Pera"
}

export type SuggestedParameters = {
  flatFee: boolean,
  fee: number,
  firstRound: number,
  lastRound: number,
  genesisID: string,
  genesisHash: string,
}

export type FormattedPeraTransaction = algosdk.Transaction | {
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

export type FormattedMyAlgoTransaction = algosdk.Transaction | {
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