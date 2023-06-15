import './App.css';
import React, { FC, useEffect, useState } from 'react';
import { checkForPeraConnection, myAlgoWalletConnect, peraWalletConnect } from './util/connect';
import { ConnectionTypes, FormattedMyAlgoTransaction, FormattedPeraTransaction } from './types';
import ConnectButtons from './components/ConnectButtons';
import LoadingScreen from './components/Loading';
import TransactionButtons from './components/TransactionButton';
import { formatTransaction } from './util/transactions/formatTransaction';
import { signTransactionMyConnect, signTransactionPera } from './util/transactions/transactions';

const App: FC = () => {
  const [userWalletAddress, setUserWalletAddress] = useState<string | null>(null);
  const [connected, setConnected] = useState<boolean>(false);
  const [transactionId, setTransactionId] = useState<string | null>(null);
  const [connectionType, setConnectionType] = useState<ConnectionTypes | null>();
  const [loading, setLoading] = useState<boolean>(false);
  
  useEffect(() => {
    //check localstorage for continued connection on page load
    peraWalletConnect.reconnectSession();
    peraSustainedCheck();
  })

  const disconnectWallet = () => {
    setUserWalletAddress(null);
    setConnectionType(null);
    setConnected(false);
    connectionType === ConnectionTypes.pera && checkForPeraConnection() && peraWalletConnect.disconnect();
  }

  const setUserConnection = (userAlgoWallet: string, connectionType: ConnectionTypes): void => {
    setUserWalletAddress(userAlgoWallet);
    setConnectionType(connectionType);
    setConnected(true);
  }

  const peraSustainedCheck = (): boolean => {
    const isConnectedToPera = checkForPeraConnection();
    const sustainedPeraWallet = peraWalletConnect?.connector?.accounts[0];
    if(isConnectedToPera && sustainedPeraWallet) {
      //reconnect, alter the state, and return true for to act as blocker
      setUserConnection(sustainedPeraWallet, ConnectionTypes.pera);
      return true;
    } else {
      return false;
    }
  }

  const launchTransaction = async() => {
    //load during request wait
    setLoading(true);
    //check connectionType in state, launch either transaction type accordingly
    const isPera = connectionType === ConnectionTypes.pera;
    //amount and note hardcoded for the demo
    const amount = 1;
    const note = "Test Transaction on Algorand";
    const transaction = await formatTransaction(isPera, amount, userWalletAddress!, note);
    isPera ? peraTransactionStart(transaction) : myAlgoTransactionStart(transaction);
  }

  const peraTransactionStart = async (peraTransactionToSign: FormattedPeraTransaction ) => {
    console.log(peraTransactionToSign)
    const signatureResponse = await signTransactionPera(peraTransactionToSign, 'test', userWalletAddress!);
    console.log(signatureResponse);
  }

  const myAlgoTransactionStart = async (myAlgoTransactionToSign: FormattedMyAlgoTransaction) => {
    console.log(myAlgoTransactionToSign)
    const signatureResponse = await signTransactionMyConnect(myAlgoTransactionToSign, userWalletAddress!);
  }

  const startConnectionPera = async (): Promise<void> => {
    //check for sustained connection
    const sustainedPeraWallet = await peraSustainedCheck();
    if(sustainedPeraWallet) return;
    
    try {
      const userAddresses = await peraWalletConnect.connect();
      const userAlgoWallet = userAddresses[0];
      //set wallet in state to retrieved wallet, if found, if not throw error
      userAlgoWallet
        ? setUserConnection(userAlgoWallet, ConnectionTypes.pera)
        : alert("No found wallet.")
    } catch(err) {
        alert("Error completing wallet connection.")
    }
  }

  const startConnectionMyAlgo = async (): Promise<void> => {
    try {
      const userAddresses = await myAlgoWalletConnect().connect();
      const userAlgoWallet = userAddresses[0].address;
      //set wallet in state to retrieved wallet, if found, if not throw error
      userAlgoWallet ? setUserConnection(userAlgoWallet, ConnectionTypes.myAlgo) : alert("No found wallet.")
    } catch(err: unknown) {
        alert("Error completing wallet connection.")
    }
  }

  const isConnected = userWalletAddress && connected && connectionType;

  return (
    <div className="App">
      <LoadingScreen loading={loading}/>
      <header className="App-header">
        <h1>Algorand Connector</h1>
        <h4 className="button-header">{isConnected ? `${connectionType} Wallet: ${userWalletAddress}` : "Connect your wallet using Pera or MyAlgo"}</h4>
        <div className={`connect-button-container`}>{'Connect Now'}
          {isConnected ? (
              <TransactionButtons disconnectWallet={disconnectWallet} launchTransaction={launchTransaction} />
            ) : (
              <ConnectButtons startConnectionMyAlgo={startConnectionMyAlgo} startConnectionPera={startConnectionPera} />
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
