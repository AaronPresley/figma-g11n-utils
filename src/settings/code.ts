import { sendMsgToUI, $codeMessage } from '../utils/messages';

export default async () => {
  figma.showUI(__html__);
  
  $codeMessage
    .subscribe(val => console.log('within CODE', val));

  sendMsgToUI('ping');
  // figma.ui.onmessage = (msg) => {
  //   console.log('UI msg received in CODE', { msg });
  //   sendMsgToUI('pong');
  // }
}