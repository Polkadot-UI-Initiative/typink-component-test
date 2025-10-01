import "./App.css";
import { Status } from "./status";
import { PolkadotProvider } from "./lib/polkadot-provider.papi";
import { AddressInput } from "./components/address-input.papi";

function App() {
  return (
    <PolkadotProvider>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1>Poladot-UI Component Test</h1>
        <AddressInput identityChain="paseoPeople" />
        <Status />
      </div>
    </PolkadotProvider>
  );
}

export default App;
