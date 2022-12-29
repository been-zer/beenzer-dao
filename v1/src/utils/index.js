export function shortWallet (addrs, n) {
  return addrs.slice(0, n)+'...'+addrs.slice(-n)
}

export function markWallet(address, wallet){
  if( wallet == address ) 
    return 'font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600';
  else
    return false;
}

export function formatTime (num) {
  if (String(num).length < 2) 
    return '0' + String(num);
  else if (String(num).length < 1) 
    return '00';
  return String(num);
}

export function getDate () {
  const d = new Date;
  const year = formatTime(d.getUTCFullYear());
  const month = formatTime(d.getUTCMonth()+1);
  const day = formatTime(d.getUTCDate());
  return `${year}-${month}-${day}`;
}

export function getTime () {
  const d = new Date;
  const hours = formatTime(d.getUTCHours());
  const minutes = formatTime(d.getMinutes());
  const seconds = formatTime(d.getSeconds());
  return `${hours}:${minutes}:${seconds}`;
}

export function countDown () {
  const time = getTime().split(':');
  const hours = formatTime(23-time[0]);
  const minutes = formatTime(59-time[1]);
  const seconds = formatTime(59-time[2]);
  return `${hours}h ${minutes}m ${seconds}s`;
}




