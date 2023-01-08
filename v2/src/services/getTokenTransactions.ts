/* eslint-disable @typescript-eslint/no-explicit-any */
// import { TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { Connection, PublicKey } from '@solana/web3.js';
import { formatPercentage } from '../utils';
import { useStore } from '../services/store';

const store = useStore();
const SOLANA_RPC_URL = process.env.VUE_APP_SOLANA_RPC_URL as string;
const TOKEN = process.env.VUE_APP_BEEN_TOKEN as string;
const TOKEN_ACCOUNT = process.env.VUE_APP_BEEN_TOKEN_ACCOUNT as string;
const SOLANA_CONNECTION = new Connection(SOLANA_RPC_URL);

export interface TokenTransfer {
  date: string;
  time: string,
  signature: string;
  type: string;
  sender: string;
  reciever: string;
  amount: number;
  symbol: string;
  token: string;
  token_account: string;
}


export const getTokenTransfers = async ( _tokenAccount: string = TOKEN_ACCOUNT ): Promise<Array<TokenTransfer>> => {
  const rawAccounts = await SOLANA_CONNECTION.getSignaturesForAddress(new PublicKey(_tokenAccount));
    let supply = 0;
    const holders: Array<TokenTransfer> = [];
    rawAccounts.forEach((acc:any) => {
      const holder: TokenTransfer = { 
        date: '',
        time: '',
        signature: '',
        type: '',
        sender: '',
        reciever: '',
        amount: 0,
        symbol: '',
        token: '',
        token_account: ''
      }
      supply += holder.amount
      holders.push(holder);
    });
    holders.sort((a, b) => (a.amount < b.amount) ? 1 : -1)
    let i = 1;
    holders.map((acc:TokenTransfer) => { 
      
      i++;
    });
    // if ( store.state.usersFlags.length === 0 ) {
    //   console.log('Init store.state.usersFlags first!');
    // }
    return holders;
};
