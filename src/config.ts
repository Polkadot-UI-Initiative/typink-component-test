import {
  polkadot,
  polkadot_asset_hub,
  polkadot_people,
} from "@polkadot-api/descriptors";
import { getWsProvider } from "@polkadot-api/ws-provider";
import { defineConfig } from "@reactive-dot/core";
import { InjectedWalletProvider } from "@reactive-dot/core/wallets.js";

const polkadotProvider = getWsProvider("wss://polkadot-rpc.publicnode.com");
const polkadotAssetHubProvider = getWsProvider(
  "wss://sys.ibp.network/asset-hub-polkadot"
);
const polkadotPeopleProvider = getWsProvider(
  "wss://sys.ibp.network/people-polkadot"
);

export const config = defineConfig({
  chains: {
    polkadot: {
      descriptor: polkadot,
      provider: polkadotProvider,
    },
    polkadot_asset_hub: {
      descriptor: polkadot_asset_hub,
      provider: polkadotAssetHubProvider,
    },
    polkadot_people: {
      descriptor: polkadot_people,
      provider: polkadotPeopleProvider,
    },
  },
  wallets: [new InjectedWalletProvider()],
});
