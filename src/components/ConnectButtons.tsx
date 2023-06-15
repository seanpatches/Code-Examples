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
      <button className="connect-button connect-button-my-algo" onClick={startConnectionMyAlgo}>My Algo</button>
      <button className="connect-button connect-button-pera" onClick={startConnectionPera}>Pera Wallet</button>
    </>
  )
}

export default ConnectButtons;