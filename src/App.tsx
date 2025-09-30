import { Suspense } from "react";
import "./App.css";
import { Status } from "./status";
import { PolkadotProvider } from "./lib/polkadot-provider.papi";

function App() {
  return (
    <PolkadotProvider>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1>Poladot-UI Component Test</h1>
        {/* Put Component Here */}
        <Suspense
          fallback={
            <div className="fixed bottom-1 right-1">Loading status…</div>
          }
        >
          <Status />
        </Suspense>
      </div>
    </PolkadotProvider>
  );
}

export default App;
