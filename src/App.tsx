import "./App.css";
import { Status } from "./status";
import { ConnectWallet } from "./components/connect-wallet.dedot";

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>Poladot-UI Component Test</h1>
      <ConnectWallet />
      <Status />
    </div>
  );
}

export default App;
