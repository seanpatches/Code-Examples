import WalletConnect from "@walletconnect/client";
import MyAlgo from "@randlabs/myalgo-connect";
import QRCodeModal from "algorand-walletconnect-qrcode-modal";
import { PeraWalletConnect } from "@perawallet/connect";

export const walletConnect = new WalletConnect({
  bridge: "https://bridge.walletconnect.org",
  qrcodeModal: QRCodeModal,
});

export const peraWalletConnect = new PeraWalletConnect();

export const myAlgoWalletConnect = () => new MyAlgo();

export const checkForPeraConnection = () => peraWalletConnect.isConnected;