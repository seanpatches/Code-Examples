import { fetchSuggestedParams } from "./services/requests";
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

	const suggestedParams = await fetchSuggestedParams();
	//hard-code to 5 for 
	const enc = new TextEncoder();

	const txn = isPera
		? {
				...suggestedParams,
				from: address,
				to: address,
				amount: amountToPay,
				type: "axfer",
				assetIndex: 1,
				note: enc.encode(note),
		} : algosdk.makeAssetTransferTxnWithSuggestedParams(
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