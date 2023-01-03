export interface Settings {
  welcome: boolean;
  singup: boolean;
  dark: boolean;
  sound: boolean;
}

export interface SettingsState {
  settings?: Settings;
  error: boolean;
}