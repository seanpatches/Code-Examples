import React, { FC } from 'react';

type TransactionButtonsProps = {
  launchTransaction: () => void,
  disconnectWallet: () => void,
};

const TransactionButtons: FC<TransactionButtonsProps> = ({ launchTransaction, disconnectWallet }) => {

  return (
    <>
      <button className="transaction-button" onClick={launchTransaction}>Test Transaction</button>
      <button className="transaction-button" onClick={disconnectWallet}>Disconnect Wallet</button>
    </>
  )
}

export default TransactionButtons;