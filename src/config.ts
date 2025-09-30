import { polkadot } from "@polkadot-api/descriptors";
import { getWsProvider } from "@polkadot-api/ws-provider";
import { defineConfig } from "@reactive-dot/core";
import { InjectedWalletProvider } from "@reactive-dot/core/wallets.js";

const provider = getWsProvider("wss://polkadot-rpc.publicnode.com");

export const config = defineConfig({
  chains: {
    polkadot: {
      descriptor: polkadot,
      provider: provider,
    },
  },
  wallets: [new InjectedWalletProvider()],
});
