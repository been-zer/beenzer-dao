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

export function sleep(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms) );
}

export function sqlFilter (text: string): string {
  // eslint-disable-next-line no-useless-escape
  const regex = new RegExp(/(\s*([\0\b\'\"\n\r\t\%\_\\]*\s*(((select\s*.+\s*from\s*.+)|(insert\s*.+\s*into\s*.+)|(update\s*.+\s*set\s*.+)|(delete\s*.+\s*from\s*.+)|(drop\s*.+)|(truncate\s*.+)|(alter\s*.+)|(exec\s*.+)|(\s*(all|any|not|and|between|in|like|or|some|contains|containsall|containskey)\s*.+[\=\>\<=\!\~]+.+)|(let\s+.+[\=]\s*.*)|(begin\s*.*\s*end)|(\s*[\/\*]+\s*.*\s*[\*\/]+)|(\s*(\-\-)\s*.*\s+)|(\s*(contains|containsall|containskey)\s+.*)))(\s*[\;]\s*)*)+)/i)
  if (!text.match(regex)) {
    return text.replace(/ /g, '');
  }
  return '';
}