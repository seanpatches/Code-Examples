import React, { FC } from 'react';

type TransactionButtonsProps = {
  launchTransaction: () => void,
  disconnectWallet: () => void,
};

const TransactionButtons: FC<TransactionButtonsProps> = ({ launchTransaction, disconnectWallet }) => {

  return (
    <>
      <div className="transaction-button" onClick={launchTransaction}>Test Transaction</div>
      <div className="transaction-button" onClick={disconnectWallet}>Disconnect Wallet</div>
    </>
  )
}

export default TransactionButtons;