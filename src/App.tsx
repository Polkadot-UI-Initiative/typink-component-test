import "./App.css";
import { AddressInput } from "./components/address-input.dedot";
import { Status } from "./status";

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>Poladot-UI Component Test</h1>
      <AddressInput identityChain="polkadot_people" />
      <Status />
    </div>
  );
}

export default App;
