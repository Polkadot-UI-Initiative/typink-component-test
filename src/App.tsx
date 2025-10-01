import "./App.css";
import { Status } from "./status";
import { PolkadotProvider } from "./lib/polkadot-provider.papi";
import { SelectTokenDialog } from "./components/select-token-dialog.papi";

function App() {
  return (
    <PolkadotProvider>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1>Poladot-UI Component Test</h1>
        <SelectTokenDialog chainId="paseoAssetHub" assetIds={[1337]} />
        <Status />
      </div>
    </PolkadotProvider>
  );
}

export default App;
