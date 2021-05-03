import { Observable } from 'rxjs';

export interface FigmaMessageData {
  command: string,
  data?: any,
}

// Use this within CODE to listen for UI messages
export const uiMessageObserver = (): Observable<FigmaMessageData> =>
  new Observable(subscriber => {
    figma.ui.onmessage = (data:FigmaMessageData) => subscriber.next(data);
  });

// Use this within UI to listen for CODE messages
export const codeMessageObserver = (): Observable<FigmaMessageData> =>
  new Observable(subscriber => {
    onmessage = (e) => subscriber.next(e.data.pluginMessage);
  });

// Use this to send messages TO code
export const sendMsgToCode = (data:FigmaMessageData) => {
  parent.postMessage({
    pluginMessage: data
  }, '*');
};

// Use this to send messages TO ui
export const sendMsgToUI = (data:FigmaMessageData) => {
  figma.ui.postMessage(data, { origin: '*' });
};