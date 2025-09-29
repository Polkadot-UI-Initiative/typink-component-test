import "./App.css";
import { Status } from "./status";
import { SelectToken } from "./components/select-token.dedot";
import { paseoAssetHub } from "typink";

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>Poladot-UI Component Test</h1>
      {/* Put Component Here */}
      <span>Connected Network: {paseoAssetHub.id}</span>
      <SelectToken 
        chainId={paseoAssetHub.id}
        assetIds={[1984, 1337, 7777]}
        withBalance={true}
        className="mt-4"
      />
      <Status />
    </div>
  );
}

export default App;
