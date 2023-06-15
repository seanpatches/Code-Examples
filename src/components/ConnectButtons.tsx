import React, { FC } from 'react';
import PeraImage from '../assets/pera-wallet-logo.png';
import MyAlgoImage from '../assets/my-algo-logo.png';

type ConnectButtonsProps = {
  startConnectionMyAlgo: () => void,
  startConnectionPera: () => void,
};

const ConnectButtons: FC<ConnectButtonsProps> = ({
  startConnectionMyAlgo,
  startConnectionPera,
}) => {

  return (
    <>
      <div className="connect-button connect-button-my-algo" onClick={startConnectionMyAlgo}>
        <img className="connect-image" src={MyAlgoImage} alt="MyAlgo"/>My Algo
      </div>
      <div className="connect-button connect-button-pera" onClick={startConnectionPera}>
      <img className="connect-image" src={PeraImage} alt="Pera"/>Pera Wallet
      </div>
    </>
  )
}

export default ConnectButtons;