import './App.css';
import React, { Component } from 'react';
import { connectMyAlgoWallet } from './Connect';

const initialState = {
  userWalletAddress: null,
  connection: false,
  transaction: null,
  connectionType: null,
}

interface appState {
  userWalletAddress: string | null,
  connection: boolean,
  transaction: string | null,
  connectionType: string | null,
}

enum connectionTypes {
  myAlgo,
  pera
}

class App extends Component<React.ComponentClass> {
  state: appState = initialState;
  constructor(props: {}){
    super(props)
  }
  
  componentWillMount(): void {
    console.log('before')
    //check localstorage for continued connection
  }

  componentDidMount(): void {

  }

  launchTransaction() {
    //check connectionType in state, launch either transaction type accordingly
  }

  peraTransactionStart() {
    
  }

  myAlgoTransactionStart() {
    
  }

  async startConnectionPera() {
    
  }

  async startConnectionMyAlgo() {
    //prompt myAlgo login
    try {
      const userAddresses = await connectMyAlgoWallet().connect();
      const userAlgoWallet = userAddresses[0].address;
      //set wallet in state to retrieved wallet, if found, if not throw error
      userAlgoWallet
        ? this.setState({
            userWalletAddress: userAlgoWallet,
            connectionType: connectionTypes.myAlgo
          })
        : alert("No found wallet.")
    } catch(err) {
        alert("Error completing wallet connection.")
    }
  }

  render() {
    const {
      userWalletAddress,
      connection,
      transaction,
      connectionType
    } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <h1>Algorand Connector</h1>
          <h3>Connect your wallet using Pera or MyAlgo</h3>
          <div className={`connect-button-container`}>{'Connect Now'}
            <button className="connect-button-pera" onClick={this.startConnectionPera}></button>
            <button className="connect-button-my-algo" onClick={this.startConnectionMyAlgo}></button>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
