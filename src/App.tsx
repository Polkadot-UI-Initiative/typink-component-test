import "./App.css";
import { RequireAccount } from "./components/require-account.dedot";
import { Status } from "./status";

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>Poladot-UI Component Test</h1>
      <RequireAccount
        chainId="polkadot"
        fallback={<div>Account needed...</div>}
      >
        <div>Account</div>
      </RequireAccount>
      <Status />
    </div>
  );
}

export default App;
