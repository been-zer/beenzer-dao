export interface State {
  welcome: boolean,
  singup: boolean,
  wallet: string,
  user: string
  flag: string,
  currency: string,
  SOL: number,
  USD: number,
  BEEN: number,
  dark: boolean,
  sound: boolean,
}

function state(): State {
  return {
    welcome: true,
    singup: false,
    wallet: '',
    user: '',
    flag: '🏴‍☠️',
    currency: 'SOL',
    SOL: 0,
    USD: 0,
    BEEN: 0,
    dark: true,
    sound: true,
  }
}

export default state;