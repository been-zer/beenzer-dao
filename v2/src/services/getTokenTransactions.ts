/* eslint-disable @typescript-eslint/no-explicit-any */
import { Connection, PublicKey } from '@solana/web3.js';
import { getDateTime } from '../utils';

const SOLANA_RPC_URL = process.env.VUE_APP_SOLANA_RPC_URL as string;
const SOLANA_CONNECTION = new Connection(SOLANA_RPC_URL);
const TOKEN = process.env.VUE_APP_BEEN_TOKEN as string;
const SYMBOL = 'BEEN';
const TX_LIMIT = 20;

export interface TokenTransaction {
  date: string;
  time: string,
  signature: string;
  type: string;
  sender: string;
  receiver: string;
  amount: number;
  symbol: string;
  token: string;
}

export const getTokenTransactions = async ( _token: string = TOKEN, _symbol: string = SYMBOL ): Promise<Array<TokenTransaction>> => {
  const signatures = await SOLANA_CONNECTION.getConfirmedSignaturesForAddress2(
    new PublicKey(_token),
    {limit: TX_LIMIT}
  );
  console.log('trans', signatures);
  const signatureList = signatures.map((transaction:any)=>transaction.signature);
  const transactionDetails = await SOLANA_CONNECTION.getParsedTransactions(signatureList);
  console.log('trans details', transactionDetails);
  const transactions: Array<TokenTransaction> = [];
  transactionDetails.forEach((transaction:any) => {
    const date = new Date(transaction.blockTime * 1000);
    const dateTimeStr = getDateTime(date);
    const dateTimeArr = dateTimeStr.split(' ');
    const txLogs = transaction.meta.logMessages;
    let txType = '?';
    txLogs.forEach((log:string) => {
      if ( log == "Program log: Instruction: TransferChecked" ) {
        txType = '💸 Transfer';
      } else if ( log == "Program log: Instruction: Mint" ) {
        txType = '⛏️ Mint';
      } else if ( log == "Program log: Instruction: Burn" ) {
        txType = '🔥 Burn';
      }
    });
    const tx: TokenTransaction = {
      date: dateTimeArr[0],
      time: dateTimeArr[1],
      signature: transaction.transaction.signatures[0],
      type: txType,
      sender: transaction.meta.preTokenBalances[0].owner,
      receiver: transaction.meta.preTokenBalances.length === 2 ? transaction.meta.preTokenBalances[1].owner : transaction.meta.preTokenBalances[0].owner,
      amount: transaction.meta.preTokenBalances[0].uiTokenAmount.uiAmount,
      symbol: _symbol,
      token: _token
    }
    transactions.push(tx);
  });
  console.log('out', transactions);
  return transactions;
};
