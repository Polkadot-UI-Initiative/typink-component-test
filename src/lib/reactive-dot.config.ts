import {
  polkadot_asset_hub,
  polkadot_people,
  polkadot,
} from "@polkadot-api/descriptors";
import { defineConfig } from "@reactive-dot/core";
import type { ChainId } from "@reactive-dot/core";
import { InjectedWalletProvider } from "@reactive-dot/core/wallets.js";
import {
  getWsProvider,
  type WsJsonRpcProvider,
} from "polkadot-api/ws-provider";

let polkadotPeopleProvider: WsJsonRpcProvider | null = getWsProvider(
  "wss://sys.ibp.network/people-polkadot"
);
let polkadotAssetHubProvider: WsJsonRpcProvider | null = getWsProvider(
  "wss://sys.ibp.network/asset-hub-polkadot"
);
let polkadotProvider: WsJsonRpcProvider | null = getWsProvider(
  "wss://rpc.polkadot.io"
);

export const destroyProviders = () => {
  polkadotPeopleProvider = null;
  polkadotAssetHubProvider = null;
  polkadotProvider = null;
  polkadotAssetHubProvider = null;
};

export const config = defineConfig({
  ssr: true,
  chains: {
    polkadot: {
      name: "Polkadot",
      descriptor: polkadot,
      provider: polkadotProvider,
      explorerUrl: "https://polkadot.subscan.io",
      symbol: "DOT",
      decimals: 10,
      logo: "https://raw.githubusercontent.com/Koniverse/SubWallet-ChainList/refs/heads/master/packages/chain-list-assets/public/assets/chains/polkadot.png",
    },
    polkadotPeople: {
      name: "Polkadot People",
      descriptor: polkadot_people,
      provider: polkadotPeopleProvider,
      explorerUrl: "https://people-polkadot.subscan.io",
      symbol: "DOT",
      decimals: 10,
      logo: "https://raw.githubusercontent.com/Koniverse/SubWallet-ChainList/refs/heads/master/packages/chain-list-assets/public/assets/chains/polkadot_people.png",
    },
    polkadotAssetHub: {
      name: "Polkadot Asset Hub",
      descriptor: polkadot_asset_hub,
      provider: polkadotAssetHubProvider,
      explorerUrl: "https://assethub-polkadot.subscan.io",
      symbol: "DOT",
      decimals: 10,
      logo: "https://raw.githubusercontent.com/Koniverse/SubWallet-ChainList/refs/heads/master/packages/chain-list-assets/public/assets/chains/polkadot_assethub.png",
    },
  },
  wallets: [new InjectedWalletProvider()],
});

export type ChainIdsWithPalletAssets = Extract<
  keyof typeof config.chains,
  "polkadotAssetHub" | "paseoAssetHub"
>;

export function isChainWithPalletAssets(
  chainId: ChainId
): chainId is ChainIdsWithPalletAssets {
  return chainId === "polkadotAssetHub" || chainId === "paseoAssetHub";
}
