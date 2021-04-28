import create, { State } from 'zustand';
import { FigmaMessageData } from '../utils/messages';

export interface LastCodeMessage extends State {
  lastMessage: FigmaMessageData,
  setLastMessage: (msg:FigmaMessageData) => void,
}

export const useCodeMessageStore = create<LastCodeMessage>(set => ({
  lastMessage: null,
  setLastMessage: (msg) => set({ lastMessage:msg }),
}));