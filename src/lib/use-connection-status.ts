"use client";

import { ClientConnectionStatus } from "@/lib/types.dot-ui";
import type { ChainId } from "@reactive-dot/core";
import { useBlock } from "@reactive-dot/react";
import type { BlockInfo } from "polkadot-api";

export function useConnectionStatus({ chainId }: { chainId: ChainId }) {
  const blockInfo = useBlock("best", { chainId }) as
    | BlockInfo
    | null
    | undefined;
  const status = blockInfo
    ? ClientConnectionStatus.Connected
    : ClientConnectionStatus.Connecting;

  return { blockInfo: blockInfo ?? null, status } as const;
}
