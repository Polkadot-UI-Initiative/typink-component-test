"use client";

import {
  RequireAccountBase,
  type RequireAccountBaseProps,
} from "./require-account.base";
import {
  PolkadotProvider,
  useSelectedAccount,
} from "@/lib/polkadot-provider.papi";
import { Suspense, useMemo } from "react";

export type RequireAccountProps = Omit<RequireAccountBaseProps, "services">;

export function RequireAccount(props: RequireAccountProps) {
  return (
    <Suspense fallback={props.loadingFallback ?? props.fallback ?? null}>
      <RequireAccountInner {...props} />
    </Suspense>
  );
}

function RequireAccountInner(props: RequireAccountProps) {
  const { selectedAccount } = useSelectedAccount();
  console.log("selectedAccount", selectedAccount);

  const services = useMemo(
    () => ({
      hasAccount: !!selectedAccount?.address,
    }),
    [selectedAccount?.address]
  );

  return <RequireAccountBase {...props} services={services} />;
}

export function RequireAccountWithProvider(props: RequireAccountProps) {
  return (
    <PolkadotProvider>
      <RequireAccount {...props} />
    </PolkadotProvider>
  );
}

RequireAccountWithProvider.displayName = "RequireAccountWithProvider";
