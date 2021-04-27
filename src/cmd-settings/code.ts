import { FigmaMessageData, sendMsgToUI, uiMessageObserver } from '../utils/messages';
import { getValue, setValue } from '../utils/storage';

export interface StoredSettings {
  pseudoTranslate: {
    doExpand: boolean;
  }
}

const getSettings = async ():Promise<StoredSettings> => ({
  pseudoTranslate: {
    doExpand: await getValue<boolean>('pseudoTranslation.doExpand') || false,
  }
});

const saveSettings = async (settings:StoredSettings):Promise<void> => {
  await setValue(
    'pseudoTranslation.doExpand',
    settings?.pseudoTranslate?.doExpand || false,
  );
};

const processMsg = async (msg:FigmaMessageData) => {
  const data = msg?.data || null;

  switch(msg?.command) {
    case 'settings-getSettings':
      sendMsgToUI({
        command: 'settings-getSettings',
        data: await getSettings(),
      });
      break;

    default:
      console.warn(`Unknown command from UI "${msg.command}"`)
      break;
  }
}

export default async () => {
  figma.showUI(__html__);

  // Watch for any UI messages and pass them to
  // the func responsible for processing them
  uiMessageObserver().subscribe(processMsg);

  // Triggering our UI layer to initialize our settings
  sendMsgToUI({ command: 'init-ui-settings' });

  setTimeout(function() {
    console.log('hi');
    sendMsgToUI({ command: 'ui-error', data: 'some error!' });
  }, 2000);
}