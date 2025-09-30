import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { config } from "./config.ts";
import { ReactiveDotProvider, ChainProvider } from "@reactive-dot/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReactiveDotProvider config={config}>
      <ChainProvider chainId="polkadot">
        <App />
      </ChainProvider>
    </ReactiveDotProvider>
  </StrictMode>
);
