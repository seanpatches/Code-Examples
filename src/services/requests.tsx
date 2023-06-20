import axios from 'axios';
import { SuggestedParameters } from '../types';

const suggestedParamsAxios = axios.create({
  baseURL: "https://node.testnet.algoexplorerapi.io/v2/transactions/params"
});

export const fetchSuggestedParams = async (): Promise<SuggestedParameters> => {
  const suggestedResponse = await suggestedParamsAxios.get("");
  
  const formattedSuggestedParams = {
    firstRound: suggestedResponse.data["last-round"],
    lastRound: suggestedResponse.data["last-round"] + 1000,
    genesisID: suggestedResponse.data["genesis-id"],
    genesisHash: suggestedResponse.data["genesis-hash"],
    flatFee: false,
    fee: suggestedResponse.data["fee"]
  };

  return formattedSuggestedParams;
}