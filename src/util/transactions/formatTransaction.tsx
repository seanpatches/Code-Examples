import { fetchSuggestedParams } from "../../services/requests";
import algosdk from "algosdk";

export const formatTransaction = async (
	isPera: boolean,
	amount: number,
	address: string,
	note: string
) => {
	//full units are in millionths
  	const million = 1000000;
	const amountToPay = Math.round(amount * million);
 	const testnetUSDC = 10458941;

	const suggestedParams = await fetchSuggestedParams();
	//hard-code to 5 for 
	const enc = new TextEncoder();

	const txn = isPera
		? algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
				from: address,
				to: address,
				assetIndex: testnetUSDC,
				amount: amountToPay,
				suggestedParams
			})
		: algosdk.makeAssetTransferTxnWithSuggestedParams(
				address,
				address,
				undefined,
				undefined,
				amountToPay,
				enc.encode(note),
				1,
				suggestedParams
			)
            
	return txn;
};