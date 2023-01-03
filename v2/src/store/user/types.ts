export interface User {
  pubkey: string;
  username: string;
  pfp: string;
  description: string;
  birthdate: string;
  country: string;
  flag: string;
  city: string;
  phone: string;
  email: string;
  verified: boolean;
  twitter: string;
  instagram: string;
  discord: string;
  telegram: string;
  youtube: string;
  tiktok: string;
  magiceden: string;
  opensea: string;
  appuser: boolean;
  created_ad: number,
  timestamp: number
}

export interface UserState {
  user?: User;
  error: boolean;
}