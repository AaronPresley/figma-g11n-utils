import { filter } from 'rxjs/operators';
import { $codeMessage } from '../utils/messages';

export default async () => {
  figma.showUI(__html__);
  
  $codeMessage
    .subscribe(val => console.log('UI message received', val));

  // sendMsgToUI({ command: 'settings', fromCode: true });

  // figma.ui.onmessage = (msg) => {
  //   console.log('UI msg received in CODE', { msg });
  //   sendMsgToUI('pong');
  // }
}