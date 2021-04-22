import { sendMsgToUI, uiMessageObserver } from '../utils/messages';

export default async () => {
  figma.showUI(__html__);
  sendMsgToUI({ command: 'init-ui-settings' });
}