export interface Wallet {
  connected: boolean;
  pubkey: string;
  currency: string;
  SOL: string;
  BEEN: string;
  USDC: string;
}

export interface WalletState {
  wallet?: Wallet;
  error: boolean;
}