/* eslint-disable @typescript-eslint/no-explicit-any */
// import { TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { Connection, PublicKey } from "@solana/web3.js";

const SOLANA_RPC_URL = process.env.VUE_APP_SOLANA_RPC_URL as string;
const TOKEN = process.env.VUE_APP_BEEN_TOKEN as string;
const SOLANA_CONNECTION = new Connection(SOLANA_RPC_URL);

export interface TokenHolder {
  holder: string;
  account: string;
  lamports: number;
  token: string;
  decimal: number;
  supply: number;
  amount: number;
  allocation: number;
  ranking: number;
}

export const getTokenHolders = async ( _token: string = TOKEN ) => {
  const rawAccounts = await SOLANA_CONNECTION.getParsedProgramAccounts(
    new PublicKey('TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'), // new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA")
    {
      filters: [
        {
          dataSize: 165, // number of bytes
        },
        {
          memcmp: {
            offset: 0, // number of bytes
            bytes: _token, // base58 encoded string
          },
        },
      ],
    }
  );
  let supply = 0;
  const holders: Array<TokenHolder> = [];
  rawAccounts.forEach((acc:any) => {
    const holder: TokenHolder = { 
      holder: acc.account.data.parsed.info.owner,
      account: acc.pubkey.toBase58(),
      lamports: acc.account.lamports,
      token: acc.account.data.parsed.info.mint,
      decimal: acc.account.data.parsed.info.tokenAmount.decimals,
      supply: 0,
      amount: acc.account.data.parsed.info.tokenAmount.uiAmount,
      allocation: 0,
      ranking: -1
    }
    supply += holder.amount
    holders.push(holder);
  });
  holders.sort((a, b) => (a.amount > b.amount) ? 1 : -1)
  let i = holders.length;
  holders.map((acc: TokenHolder) => { 
    acc.supply = supply;
    acc.allocation = Math.floor((acc.amount/supply)*100000)/100000;
    acc.ranking = i;
    i--;
  });
  return holders;
};
