import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import {
  paseo,
  paseoAssetHub,
  paseoPeople,
  polkadot,
  polkadotAssetHub,
  polkadotPeople,
  TypinkProvider,
} from "typink";
import { toast, Toaster } from "sonner";
import {
  beginTxStatusNotification,
  cancelTxStatusNotification,
} from "./components/tx-notification";

const supportedNetworks = [
  polkadot,
  polkadotAssetHub,
  polkadotPeople,
  paseo,
  paseoAssetHub,
  paseoPeople,
];

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TypinkProvider
      supportedNetworks={supportedNetworks}
      defaultNetworkIds={supportedNetworks.map((network) => network.id)}
    >
      <App />
      <button
        onClick={() => {
          const id = beginTxStatusNotification({
            network: polkadot,
            title: "Hello",
            description: "Please sign the transaction in your wallet",
          });
          setTimeout(() => {
            cancelTxStatusNotification({
              toastId: id,
              network: polkadot,
              title: "Hello",
              description: "Cancelled",
            });
          }, 3000);
        }}
      >
        Click me
      </button>
      <Toaster />
    </TypinkProvider>
  </StrictMode>
);
