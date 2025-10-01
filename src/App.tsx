import "./App.css";
import { Status } from "./status";
import { PolkadotProvider } from "./lib/polkadot-provider.papi";
import { ConnectWallet } from "./components/connect-wallet.papi";

function App() {
  return (
    <PolkadotProvider>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1>Poladot-UI Component Test</h1>
        <ConnectWallet />
        <Status />
      </div>
    </PolkadotProvider>
  );
}

export default App;
