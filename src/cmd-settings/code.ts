import { sendMsgToUI, uiMessageObserver } from '../utils/messages';

export default async () => {
  figma.showUI(__html__);

  uiMessageObserver()
    .subscribe(msg => console.log('from code', msg));

  setTimeout(function() {
    sendMsgToUI({ command: 'ping' });
  }, 2000);

  // Triggering our UI layer to initialize our settings
  sendMsgToUI({ command: 'init-ui-settings' });
}