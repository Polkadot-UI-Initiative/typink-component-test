import "./App.css";
import { AccountInfo } from "./components/account-info.dedot";
import { Status } from "./status";

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>Poladot-UI Component Test</h1>
      <AccountInfo address="5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY" />
      <Status />
    </div>
  );
}

export default App;
