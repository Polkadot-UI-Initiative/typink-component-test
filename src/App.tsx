import { useTx } from "typink";
import "./App.css";
import { TxButton } from "./components/tx-button.dedot";
import { Status } from "./status";

function App() {
  const tx = useTx((tx) => tx.system.remark, {
    networkId: "polkadot",
  });
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>Poladot-UI Component Test</h1>
      <TxButton
        tx={tx}
        networkId="polkadot"
        args={["Hello, world!"]}
        withNotification={true}
      >
        Send Remark
      </TxButton>
      <Status />
    </div>
  );
}

export default App;
