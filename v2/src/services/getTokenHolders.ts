import { TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { Connection } from "@solana/web3.js";

const getTokenHolders = async (_token = 'DoA5HLxcNGuqGb4wAfTXJZzAzt1juhgpYCxZpuvzgUTy') => {
  const rpcEndpoint = 'https://dry-nameless-moon.solana-mainnet.discover.quiknode.pro/f61fa4c0c62f358f4b77346ad4faa84f8742ed73/';
  const connection = new Connection(rpcEndpoint);

  const accounts = await connection.getProgramAccounts(
    TOKEN_PROGRAM_ID, // new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA")
    {
      dataSlice: {
        offset: 0, // number of bytes
        length: 0, // number of bytes
      },
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
  console.log(
    `Found ${accounts.length} token account(s) for mint ${_token}`
  );
  console.log(accounts);
};

getTokenHolders();
