import { Metaplex, keypairIdentity } from "@metaplex-foundation/js";
import { Connection, Keypair, PublicKey } from "@solana/web3.js";

const SOLANA_RPC_URL = process.env.VUE_APP_SOLANA_RPC_URL as string;
const SOLANA_CONNECTION = new Connection(SOLANA_RPC_URL);

export const getWalletNFTs = async ( ) => {
  const keypair = Keypair.generate();

  const metaplex = new Metaplex(SOLANA_CONNECTION);
  metaplex.use(keypairIdentity(keypair));

  const owner = new PublicKey(process.env.VUE_APP_MASTER_WALLET as string);
  const allNFTs = await metaplex.nfts().findAllByOwner({owner});

  console.log(allNFTs);

};

getWalletNFTs();