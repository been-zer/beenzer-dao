import App from './App.vue';
import { createApp } from 'vue';
import './registerServiceWorker';
import './assets/css/tailwind.css';
import './assets/css/wallets.css';
import router from './router'
import { store, key } from './store'
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
import SolanaWallets from 'solana-wallets-vue';
import { 
  useWorkspace 
} from './services/wallets/useWorkspace';
useWorkspace();

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

createApp(App)
  .use(router)
  .use(store, key)
  .use(SolanaWallets, walletOptions)
  .mount('#app');
