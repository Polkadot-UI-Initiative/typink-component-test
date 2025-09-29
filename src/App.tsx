import { paseoAssetHub } from "typink";
import "./App.css";
import { Status } from "./status";
import { SelectTokenDialog } from "./components/select-token-dialog.dedot";

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>Poladot-UI Component Test</h1>
      {/* Put Component Here */}
      <span>Connected Network: {paseoAssetHub.id}</span>
      <SelectTokenDialog
        chainId={paseoAssetHub.id}
        assetIds={[1984, 1337, 7777]}
        withSearch
        withBalance
        className="mt-4"
      />
      <Status />
    </div>
  );
}

export default App;
