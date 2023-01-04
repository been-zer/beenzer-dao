import { Socket } from "socket.io-client";

export interface RootState {
  socket: Socket;
  welcome: boolean;
  singup: boolean;
  dark: boolean;
  sound: boolean;
  private: boolean;
}

export interface MainState {
  root?: RootState;
  error: boolean;
}