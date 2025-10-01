import "./App.css";
import { Status } from "./status";
import { PolkadotProvider } from "./lib/polkadot-provider.papi";
import { SelectToken } from "./components/select-token.papi";

function App() {
  return (
    <PolkadotProvider>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1>Poladot-UI Component Test</h1>
        <SelectToken chainId="paseoAssetHub" assetIds={[1337]} />
        <Status />
      </div>
    </PolkadotProvider>
  );
}

export default App;
