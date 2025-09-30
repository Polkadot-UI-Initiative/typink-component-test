"use client";

import { useMemo } from "react";
import {
  RequireConnectionBase,
  type RequireConnectionBaseProps,
} from "./require-connection.base";
import { ClientOnly } from "@/components/client-only";
import {
  PolkadotProvider,
  usePapi,
} from "@/lib/polkadot-provider.papi";
import { type ChainId } from "@reactive-dot/core";
import { ClientConnectionStatus } from "@/lib/types.dot-ui";
import { config } from "@/lib/reactive-dot.config";

// Props type - removes services prop since we inject it
export type RequireConnectionProps = Omit<
  RequireConnectionBaseProps<ChainId>,
  "services"
>;

export function RequireConnection(props: RequireConnectionProps) {
  const defaultChainId = Object.keys(config.chains)[0] as ChainId;
  const { status } = usePapi(props.chainId || defaultChainId);

  const services = useMemo(
    () => ({
      isLoading: status === ClientConnectionStatus.Connecting,
      isConnected: status === ClientConnectionStatus.Connected,
    }),
    [status]
  );

  return (
    <ClientOnly fallback={props.loadingFallback ?? props.fallback ?? null}>
      <RequireConnectionBase {...props} services={services} />
    </ClientOnly>
  );
}

// Wrapped version with provider for drop-in usage
export function RequireConnectionWithProvider(props: RequireConnectionProps) {
  return (
    <PolkadotProvider>
      <RequireConnection {...props} />
    </PolkadotProvider>
  );
}

RequireConnectionWithProvider.displayName = "RequireConnectionWithProvider";
