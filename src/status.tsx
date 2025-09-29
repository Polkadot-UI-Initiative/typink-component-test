import { useTypink } from "typink";

export function Status() {
  const { connectedAccount, connectionStatus } = useTypink();
  return (
    <div className="fixed bottom-1 right-1">
      <div className="flex flex-col">
        <div className="text-xs rext-right font-mono">
          <span className="font-mono  text-gray-500">Account</span>{" "}
          {connectedAccount?.address}
        </div>
        {connectionStatus && connectionStatus.size > 0 ? (
          Array.from(connectionStatus.entries()).map(([chain, status]) => (
            <div
              key={chain}
              className="flex items-center justify-end gap-2 text-xs"
            >
              <span className="font-mono  text-gray-500">{chain}</span>
              <span
                className={
                  status === "Connected" ? "text-green-600" : "text-red-600"
                }
              >
                {status}
              </span>
            </div>
          ))
        ) : (
          <p className="text-sm text-gray-500">No connection data</p>
        )}
      </div>
    </div>
  );
}
