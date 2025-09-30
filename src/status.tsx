import { useAccounts } from "@reactive-dot/react";

export function Status() {
  const accounts = useAccounts();
  return (
    <div className="fixed bottom-1 right-1">
      <div className="flex flex-col">
        <div className="text-xs text-right font-mono">
          <span className="font-mono  text-gray-500">Account</span>{" "}
          {accounts[0]?.address}
        </div>
        todo
      </div>
    </div>
  );
}
