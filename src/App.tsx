import "./App.css";
import { Status } from "./status";
import { PolkadotProvider } from "./lib/polkadot-provider.papi";
import { AccountInfo } from "./components/account-info.papi";

function App() {
  return (
    <PolkadotProvider>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1>Poladot-UI Component Test</h1>
        <AccountInfo address="5C74C7pzE1pYVuK8F9q3xgn7t58Q6N6k9BfFhG9L59y37" />
        <Status />
      </div>
    </PolkadotProvider>
  );
}

export default App;
