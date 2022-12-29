import { Connection, PublicKey } from "@solana/web3.js";

const rpcEndpoint = 'https://dry-nameless-moon.solana-mainnet.discover.quiknode.pro/f61fa4c0c62f358f4b77346ad4faa84f8742ed73/';
const TOKEN = new PublicKey('DoA5HLxcNGuqGb4wAfTXJZzAzt1juhgpYCxZpuvzgUTy');
const solanaConnection = new Connection(rpcEndpoint);

const walletToQuery = 'DoA5HLxcNGuqGb4wAfTXJZzAzt1juhgpYCxZpuvzgUTy';

async function getTokenAccounts(wallet: string, solanaConnection: Connection) {
    
    const accounts = await solanaConnection.getProgramAccounts(
        TOKEN, //new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA")

    );
    console.log(`Found ${accounts.length} token account(s) for wallet ${wallet}.`);
    accounts.forEach((account, i) => {
      //Parse the account data
      const parsedAccountInfo:any = account.account.data;
      const mintAddress:string = parsedAccountInfo["parsed"]["info"]["mint"];
      const tokenBalance: number = parsedAccountInfo["parsed"]["info"]["tokenAmount"]["uiAmount"];
      //Log results
      console.log(`Token Account No. ${i + 1}: ${account.pubkey.toString()}`);
      console.log(`--Token Mint: ${mintAddress}`);
      console.log(`--Token Balance: ${tokenBalance}`);
    });
}

getTokenAccounts(walletToQuery, solanaConnection);