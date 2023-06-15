import React, { FC } from 'react';

type TransactionButtonProps = {
  launchTransaction: () => void,
};

const TransactionButton: FC<TransactionButtonProps> = ({ launchTransaction }) => {

  return (
      <button onClick={launchTransaction}>Test Transaction</button>
  )
}

export default TransactionButton;