export function shortWallet (addrs: string, n: number): string {
  return addrs.slice(0, n)+'...'+addrs.slice(-n)
}

export function markWallet (address: string, wallet: string): string{
  if( wallet == address ) 
    return 'font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600';
  else
    return '';
}

export function formatNumber ( number: number ): string {
  const nf = Intl.NumberFormat();
  return nf.format(number).replaceAll(',', ' ')
}