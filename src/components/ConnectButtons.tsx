import React, { FC } from 'react';

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
      <div className="connect-button connect-button-my-algo" onClick={startConnectionMyAlgo}>My Algo</div>
      <div className="connect-button connect-button-pera" onClick={startConnectionPera}>Pera Wallet</div>
    </>
  )
}

export default ConnectButtons;