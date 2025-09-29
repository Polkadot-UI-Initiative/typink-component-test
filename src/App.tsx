import "./App.css";
import { RequireConnection } from "./components/require-connection.dedot";
import { Status } from "./status";

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>Poladot-UI Component Test</h1>
      <RequireConnection
        chainId="polkadot"
        fallback={<div>Polkadot connecting...</div>}
      >
        <div>Polkadot</div>
      </RequireConnection>
      <Status />
    </div>
  );
}

export default App;
