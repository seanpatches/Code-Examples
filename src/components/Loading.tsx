import React, { FC } from 'react';

type LoadingScreenProps = {
  loading: boolean;
};

const LoadingScreen: FC<LoadingScreenProps> = ({ loading }) => {

  return (
    <div className={`loader ${loading ? "loader-show" : "loader-hide"}`}>LOADING...</div>
  )
}

export default LoadingScreen;