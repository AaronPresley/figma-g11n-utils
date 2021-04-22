import { sendMsgToCode, $codeMessage, $uiMessage } from './utils/messages';

$uiMessage
  .subscribe(val => console.log('within UI', val));

// onmessage = (e) => {
//   console.log(`CODE msg received in UI`, { msg: e.data.pluginMessage });
// }
sendMsgToCode('pong');

// setTimeout(() => {
//   console.log("I'm the CHANGED thing");
//   sendMsgToCode(`Here's a val`);
// }, 3000);