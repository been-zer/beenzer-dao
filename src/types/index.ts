// import { Socket } from 'socket.io-client';

export interface RootState {
  welcome: boolean;
  singup: boolean;
  dark: boolean;
  sound: boolean;
  private: boolean;
}

export interface MainState {
  root?: RootState;
  error: boolean;
}

export interface User {
  __pubkey__: string;
  _username_: string;
  _pfp: string;
  _name: string;
  _lastname: string;
  _description: string;
  _birthdate: string;
  _country: string;
  _flag: string;
  _city: string;
  _phone: string;
  _email: string;
  _verified: boolean;
  _twitter: string;
  _instagram: string;
  _discord: string;
  _telegram: string;
  _youtube: string;
  _tiktok: string;
  _magiceden: string;
  _opensea: string;
  _appuser: boolean;
  _created_at: number;
  _timestamp: number;
}

export interface UserState {
  user?: User;
  error: boolean;
}

export interface UsersFlags {
  pubkey: string;
  flag: string;
}
