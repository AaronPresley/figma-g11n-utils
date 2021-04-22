import { BehaviorSubject } from 'rxjs';
import { filter, map } from 'rxjs/operators';

export interface FigmaMessageData {
  command: string,
  [key: string]: any,
}
export interface FigmaMessage {
  source: 'code' | 'ui';
  data: FigmaMessageData,
}

// A generic subject to hold all messages from any source
export const $figmaMessage = new BehaviorSubject<FigmaMessage>(null);

// Messages going FROM the ui TO the code
export const $codeMessage = $figmaMessage
  .pipe(
    filter(msg => msg?.source === 'ui'),
    map(msg => msg.data),
  );

// Message going FROM code TO the ui
export const $uiMessage = $figmaMessage
  .pipe(
    filter(msg => msg?.source === 'code'),
    map(msg => msg.data),
  );


export const sendMsgToCode = (data:FigmaMessageData) => {
  parent.postMessage({
    pluginMessage: {
      source: 'ui',
      data,
    }
  }, '*');
};

export const sendMsgToUI = (data:FigmaMessageData) => {
  figma.ui.postMessage({
    source: 'code', data,
  }, { origin: '*' });
};

(() => {
  // Runs when we're in the CODE environment
  if(typeof figma !== 'undefined') {
    figma.ui.onmessage = (data:FigmaMessage) => {
      $figmaMessage.next(data);
    };
  }
  
  // Runs when we're in the UI environment
  else {
    onmessage = (e) => {
      const data: FigmaMessage = e.data.pluginMessage;
      $figmaMessage.next(data);
    }
  }
})();