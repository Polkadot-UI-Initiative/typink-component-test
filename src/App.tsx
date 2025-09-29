import "./App.css";
import { NetworkIndicator } from "./components/network-indicator.dedot";
import { Status } from "./status";

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>Poladot-UI Component Test</h1>
      <NetworkIndicator chainId="polkadot" at="best" />
      <Status />
    </div>
  );
}

export default App;
