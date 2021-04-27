import create, { State } from 'zustand';
import { FigmaMessageData } from '../utils/messages';

export interface LastCodeMessage extends State {
  lastMessage: FigmaMessageData,
}

export const useLastCodeMessage = create<LastCodeMessage>(set => ({
  lastMessage: null,
  setLastMessage: (msg:FigmaMessageData) => set({ lastMessage:msg }),
}));