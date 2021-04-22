import { BehaviorSubject } from 'rxjs';

export const $codeMessage = new BehaviorSubject<any>(null);
export const $uiMessage = new BehaviorSubject<any>(null);

export const sendMsgToCode = (msg:any) => {
  parent.postMessage({ pluginMessage: msg }, '*');
};

export const sendMsgToUI = (msg:any) => {
  figma.ui.postMessage(msg, { origin: '*' });
};

(() => {
  if(typeof figma !== 'undefined') {
    figma.ui.onmessage = (msg) => {
      $codeMessage.next(msg);
    };
  } else {
    onmessage = (e) => {
      $uiMessage.next(e.data.pluginMessage);
    }
  }
})();