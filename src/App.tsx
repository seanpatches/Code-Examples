import './App.css';
import React, { FC, useEffect, useState } from 'react';
import { checkForPeraConnection, myAlgoWalletConnect, peraWalletConnect } from './Connect';

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
    //check localstorage for continued connection on page load
    peraWalletConnect.reconnectSession()
    peraSustainedCheck();
  })

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

  const launchTransaction = () => {
    //check connectionType in state, launch either transaction type accordingly
  }

  const peraTransactionStart = () => {
    
  }

  const myAlgoTransactionStart = () => {
    
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
