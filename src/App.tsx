import "./App.css";
import { Status } from "./status";
import { PolkadotProvider } from "./lib/polkadot-provider.papi";
import { RequireConnection } from "./components/require-connection.papi";
import { Suspense } from "react";

function App() {
  return (
    <PolkadotProvider>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1>Poladot-UI Component Test</h1>
        <RequireConnection
          chainId="polkadot"
          fallback={<div>Connecting to Polkadot...</div>}
        >
          Connected To Polkadot
        </RequireConnection>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Status />
      </Suspense>
    </PolkadotProvider>
  );
}

export default App;
