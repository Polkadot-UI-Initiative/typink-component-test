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
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const supportedNetworks = [
  polkadot,
  polkadotAssetHub,
  polkadotPeople,
  paseo,
  paseoAssetHub,
  paseoPeople,
];

const queryClient = new QueryClient();  

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <TypinkProvider
        supportedNetworks={supportedNetworks}
        defaultNetworkIds={supportedNetworks.map((network) => network.id)}
      >
        <App />
      </TypinkProvider>
    </QueryClientProvider>
  </StrictMode>
);
