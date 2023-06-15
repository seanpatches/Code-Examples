import { PeraWalletConnect } from "@perawallet/connect";
import { myAlgoWalletConnect, peraWalletConnect } from "../connect";
import { TransactionSigner } from "algosdk";
import { TransactionStatusTypes } from "../../types";

export async function signTransactionPera(
    txn: any,
    message: any,
    wallet: string,
) {
    const arrayTxn = [{
      txn,
      signers: [wallet],
    }]
    
    try {
      const result = await peraWalletConnect.signTransaction([arrayTxn], wallet);
      return await result[0];
    } catch(err: unknown) {
      console.log(err)
      return { status: TransactionStatusTypes.fail}
    }
}
  
export async function signTransactionMyConnect(
  txn: any,
  wallet_address: string
) {
  try {
    const signedTxn = await myAlgoWalletConnect().signTransaction(txn.toByte());
    const sendResponse = Buffer.from(signedTxn.blob).toString("base64")
    return sendResponse;
  } catch (err: unknown) {
    console.log(err)
    return { status: TransactionStatusTypes.fail}
  }
}
  