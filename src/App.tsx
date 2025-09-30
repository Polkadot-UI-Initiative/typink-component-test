import { ChainProvider, ReactiveDotProvider } from "@reactive-dot/react";
import { Suspense } from "react";
import "./App.css";
import { Status } from "./status";
import { config } from "./config";

function App() {
  return (
    <ReactiveDotProvider config={config}>
      <ChainProvider chainId="polkadot">
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
      </ChainProvider>
    </ReactiveDotProvider>
  );
}

export default App;
