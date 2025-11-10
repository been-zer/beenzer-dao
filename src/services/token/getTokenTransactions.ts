/* eslint-disable @typescript-eslint/no-explicit-any */
import { Connection, PublicKey } from '@solana/web3.js';
import { getDateTime } from '../../utils';

const SOLANA_RPC_URL = process.env.VUE_APP_SOLANA_RPC_URL as string;
const SOLANA_CONNECTION = new Connection(SOLANA_RPC_URL);
const TOKEN = process.env.VUE_APP_BEEN_TOKEN as string;
const SYMBOL = 'BEEN';
const TX_LIMIT = 10;

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

export const getTokenTransactions = async (
  _token: string = TOKEN,
  _symbol: string = SYMBOL,
  _txLimit: number = TX_LIMIT
): Promise<Array<TokenTransaction>> => {
  // Use stable RPC: getSignaturesForAddress (replaces deprecated getConfirmedSignaturesForAddress2)
  const signatures = await SOLANA_CONNECTION.getSignaturesForAddress(
    new PublicKey(_token),
    { limit: _txLimit }
  );
  const signatureList = signatures.map((s) => s.signature);

  // Some providers may return null entries; filter them out
  const transactionDetails = await SOLANA_CONNECTION.getParsedTransactions(signatureList, {
    maxSupportedTransactionVersion: 0,
  });

  const transactions: Array<TokenTransaction> = [];
  for (const transaction of transactionDetails) {
    if (!transaction || !transaction.meta || !transaction.transaction) continue;
    const ts = (transaction.blockTime || 0) * 1000;
    const date = new Date(ts || Date.now());
    const dateTimeStr = getDateTime(date);
    const dateTimeArr = dateTimeStr.split(' ');
    const txLogs: string[] = transaction.meta.logMessages || [];
    let txType = '⛏️ Mint';
    for (const log of txLogs) {
      if (log === 'Program log: Instruction: TransferChecked') txType = '💸 Transfer';
      else if (log === 'Program log: Instruction: Mint') txType = '⛏️ Mint';
      else if (log === 'Program log: Instruction: Burn') txType = '🔥 Burn';
    }

    const pre = transaction.meta.preTokenBalances || [];
    const post = transaction.meta.postTokenBalances || [];
    const sender = pre.length >= 1 ? (pre.length === 2 ? pre[1]?.owner : pre[0]?.owner) : '';
    const receiver = post.length >= 1 ? (post.length === 2 ? post[0]?.owner : pre[0]?.owner) : '';
    const amount = pre.length === 2 && post.length === 2
      ? Math.abs((pre[1]?.uiTokenAmount?.uiAmount || 0) - (post[1]?.uiTokenAmount?.uiAmount || 0))
      : (pre[0]?.uiTokenAmount?.uiAmount || 0);

    const sig = transaction.transaction.signatures?.[0] || '';
    const tx: TokenTransaction = {
      date: dateTimeArr[0],
      time: dateTimeArr[1],
      signature: sig,
      type: txType,
      sender: sender || '',
      receiver: receiver || '',
      amount: Math.floor(amount),
      symbol: _symbol,
      token: _token,
    };
    transactions.push(tx);
  }
  return transactions;
};
