import { useAnchorWallet } from 'solana-wallets-vue'
import { Connection } from '@solana/web3.js'
import {
  BraveWalletAdapter,
  PhantomWalletAdapter,
  CoinbaseWalletAdapter,
  SlopeWalletAdapter,
  TrustWalletAdapter,
  HyperPayWalletAdapter,
  SolflareWalletAdapter,
  GlowWalletAdapter,
  SolletExtensionWalletAdapter,
  SolletWalletAdapter,
  TorusWalletAdapter,
  ExodusWalletAdapter,
  Coin98WalletAdapter,
  SolongWalletAdapter,
  StrikeWalletAdapter,
  MathWalletAdapter,
  LedgerWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import { initWallet } from './useWallet';
import {
  createWalletStore,
  WalletStoreProps,
} from "./createWalletStore";

const walletOptions = {
  wallets: [
    new BraveWalletAdapter(),
    new PhantomWalletAdapter(),
    new CoinbaseWalletAdapter(),
    new SolflareWalletAdapter(),
    new SlopeWalletAdapter(),
    new HyperPayWalletAdapter(),
    new TrustWalletAdapter(),
    new GlowWalletAdapter(),
    new SolletWalletAdapter(),
    new SolletExtensionWalletAdapter(),
    new TorusWalletAdapter(),
    new ExodusWalletAdapter(),
    new Coin98WalletAdapter(),
    new SolongWalletAdapter(),
    new StrikeWalletAdapter(),
    new MathWalletAdapter(),
    new LedgerWalletAdapter()
  ],
  autoConnect: true
}

createWalletStore(walletOptions);
initWallet(walletOptions as WalletStoreProps);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let workspace: any;
export const useWorkspace = () => workspace
export const initWorkspace = () => {
  const wallet = useAnchorWallet()
  const connection = new Connection( process.env.VUE_APP_CLUSTER_URL as string)
  workspace = {
    wallet,
    connection,
  }
}
