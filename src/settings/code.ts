import { sendMsgToUI, uiMessageObserver } from '../utils/messages';

export default async () => {
  figma.showUI(__html__);

  uiMessageObserver()
    .subscribe(console.log);
  
  sendMsgToUI({
    command: 'from-code-init',
  });

  setTimeout(function() {
    sendMsgToUI({
      command: 'from-code-delay'
    })
  }, 2000);
}