import { BehaviorSubject } from 'rxjs';
import { filter, map } from 'rxjs/operators';

export interface FigmaMessage {
  source: 'code' | 'ui';
  data: FigmaMessageData,
}

export interface FigmaMessageData {
  command: string,
  [key: string]: any,
}

// Messages going TO code
export const $codeMessage = new BehaviorSubject<FigmaMessageData>(null);

// Messages going TO ui
export const $uiMessage = new BehaviorSubject<FigmaMessageData>(null);

// To send a message TO code
export const sendMsgToCode = (data:FigmaMessageData) => {
  parent.postMessage({
    pluginMessage: {
      source: 'ui',
      data,
    }
  }, '*');
};

// To send a message TO ui
export const sendMsgToUI = (data:FigmaMessageData) => {
  figma.ui.postMessage({
    source: 'code', data,
  }, { origin: '*' });
};

(() => {
  // Runs when we're within the CODE environment
  if(typeof figma !== 'undefined') {
    figma.ui.onmessage = (data:FigmaMessageData) => {
      $codeMessage.next(data);
    };
  }
  
  // Runs when we're within the UI environment
  else {
    onmessage = (e) => {
      const data: FigmaMessageData = e.data.pluginMessage;
      $uiMessage.next(data);
    }
  }
})();