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
import { Toaster } from "sonner";

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
      <Toaster />
    </TypinkProvider>
  </StrictMode>
);
