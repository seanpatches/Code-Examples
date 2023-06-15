import './App.css';
import React, { Component, FC, useEffect, useState } from 'react';
import { connectMyAlgoWallet, peraWalletConnect } from './Connect';

enum ConnectionTypes {
  myAlgo,
  pera
}

const App: FC = () => {
  const [userWalletAddress, setUserWalletAddress] = useState<string | null>(null);
  const [connected, setConnected] = useState<boolean>(false);
  const [transactionId, setTransactionId] = useState<string | null>(null);
  const [connectionType, setConnectionType] = useState<ConnectionTypes | null>();
  
  useEffect(() => {
    console.log('before')
    //check localstorage for continued connection on page load
  }, [])

  const setUserConnection = (userAlgoWallet: string, connectionType: ConnectionTypes): void => {
    setUserWalletAddress(userAlgoWallet);
    setConnectionType(connectionType);
    setConnected(true);
  }

  const launchTransaction = () => {
    //check connectionType in state, launch either transaction type accordingly
  }

  const peraTransactionStart = () => {
    
  }

  const myAlgoTransactionStart = () => {
    
  }

  const startConnectionPera = async (): Promise<void> => {
    //prompt Pera login
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
    //prompt myAlgo login
    try {
      const userAddresses = await connectMyAlgoWallet().connect();
      const userAlgoWallet = userAddresses[0].address;
      //set wallet in state to retrieved wallet, if found, if not throw error
      userAlgoWallet ? setUserConnection(userAlgoWallet, ConnectionTypes.myAlgo) : alert("No found wallet.")
    } catch(err: unknown) {
        alert("Error completing wallet connection.")
    }
  }

  const isConnected = userWalletAddress && connected;

  return (
    <div className="App">
      <header className="App-header">
        <h1>Algorand Connector</h1>
        <h4>{isConnected ? `Wallet: ${userWalletAddress}` : "Connect your wallet using Pera or MyAlgo"}</h4>
        <div className={`connect-button-container`}>{'Connect Now'}
          <button className="connect-button-pera" onClick={startConnectionPera}></button>
          <button className="connect-button-my-algo" onClick={startConnectionMyAlgo}></button>
        </div>
      </header>
    </div>
  );
}

export default App;
