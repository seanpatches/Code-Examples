export enum ConnectionTypes {
    myAlgo,
    pera
}

export type SuggestedParameters = {
    flatFee: boolean,
    fee: number,
    firstRound: number,
    lastRound: number,
    genesisID: string,
    genesisHash: string,
}