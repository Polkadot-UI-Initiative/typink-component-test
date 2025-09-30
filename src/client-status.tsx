import { useBlock } from "@reactive-dot/react";
import type { ChainId } from "@reactive-dot/core";

export function ClientStatus({ networkId }: { networkId: ChainId }) {
  const block = useBlock("best", {
    chainId: networkId,
  });

  return (
    <div className="text-xs text-right font-mono">
      {networkId}: {block?.number || "Loading..."}
    </div>
  );
}
