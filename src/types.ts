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

export type FormattedPeraTransaction = {
  amount: number
  assetIndex: number
  fee: number
  firstRound: number
  flatFee: boolean
  from: string
  genesisHash: string
  genesisID: string
  lastRound: number
  note: Uint8Array
  to: string
  type: string
}