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

export type FormattedMyAlgoTransaction = {
  name: string,
  tag: Uint8Array,
  type: string,
  from: {
      publicKey: Uint8Array,
      checksum: Uint8Array
  },
  to: {
      publicKey: Uint8Array,
      checksum: Uint8Array
  },
  amount: number,
  assetIndex: number,
  note: Uint8Array,
  flatFee: false,
  genesisHash: Uint8Array,
  fee: number,
  firstRound: number,
  lastRound: number,
  genesisID: string,
  appArgs: [],
  lease: {}
}