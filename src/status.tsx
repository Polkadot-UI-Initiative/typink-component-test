import { useAccounts } from "@reactive-dot/react";
import { config } from "./lib/reactive-dot.config";
import { ClientStatus, ClientStatusFallback } from "./client-status";
import { Suspense } from "react";

export function Status() {
  const accounts = useAccounts();
  const chainIds = Object.keys(config.chains);

  return (
    <div className="fixed bottom-1 right-1">
      <div className="flex flex-col">
        <div className="text-xs text-right font-mono">
          <span className="font-mono  text-gray-500">Account</span>{" "}
          {accounts[0]?.address}
        </div>
        {chainIds?.map((chainId) => {
          return (
            <Suspense
              key={chainId}
              fallback={<ClientStatusFallback networkId={chainId} />}
            >
              <ClientStatus key={chainId} networkId={chainId} />
            </Suspense>
          );
        })}
      </div>
    </div>
  );
}
