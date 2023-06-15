import './App.css';
import React, { Component } from 'react';

const initialState = {
  walletAddress: null,
  connection: false,
  transaction: null,
  connectionType: null,
}

interface appState {
  walletAddress: string | null,
  connection: boolean,
  transaction: string | null,
  connectionType: string | null,
}

class App extends Component<React.Component> {
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

  startConnection(){
    //launch connection, depending on wallet connection type
  }

  launchTransaction(){

  }

  peraTransactionStart(){
    
  }

  myAlgoTransactionStart(){
    
  }

  peraConnectionStart(){

  }

  myAlgoConnectionStart(){

  }

  render() {
    const {
      walletAddress,
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
            <button className="connect-button-pera"></button>
            <button className="connect-button-my-algo"></button>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
