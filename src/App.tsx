import "./App.css";
import { Status } from "./status";
import { PolkadotProvider } from "./lib/polkadot-provider.papi";
import { RequireAccount } from "./components/require-account.papi";

function App() {
  return (
    <PolkadotProvider>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1>Poladot-UI Component Test</h1>
        <RequireAccount fallback={<div>Account Not Found</div>}>
          <div>Connected To Polkadot</div>
        </RequireAccount>
        <Status />
      </div>
    </PolkadotProvider>
  );
}

export default App;
