/* eslint-disable @typescript-eslint/no-explicit-any */
import { Connection, PublicKey } from "@solana/web3.js";

const SOLANA_RPC_URL = process.env.VUE_APP_SOLANA_RPC_URL as string;
const TOKEN = new PublicKey(process.env.VUE_APP_BEEN_TOKEN as string);
const SOLANA_CONNECTION = new Connection(SOLANA_RPC_URL);

export async function getTokenAccounts(wallet: string) {    
  const accounts = await SOLANA_CONNECTION.getProgramAccounts(
    new PublicKey('TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'), //new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA")
  );
  console.log(`Found ${accounts.length} token account(s) for wallet ${wallet}.`);
  const ret: Array<any> = [];
  accounts.forEach((account, i) => {
    //Parse the account data
    const parsedAccountInfo:any = account.account.data;
    const mintAddress:string = parsedAccountInfo["parsed"]["info"]["mint"];
    const tokenBalance:number = parsedAccountInfo["parsed"]["info"]["tokenAmount"]["uiAmount"];
    ret.push({parsedAccountInfo, mintAddress, tokenBalance});
    //Log results
    console.log(`Token Account No. ${i + 1}: ${account.pubkey.toString()}`);
    console.log(`--Token Mint: ${mintAddress}`);
    console.log(`--Token Balance: ${tokenBalance}`);
  });
  return ret;
}

export async function getTokenSupply () {
  const supply = await SOLANA_CONNECTION.getSupply();
  console.log(`Token Supply: ${supply}`);
  return supply
}
