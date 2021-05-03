import { filter, map } from 'rxjs/operators';
import { codeMessageObserver } from "./utils/messages";
import initSettings from './cmd-settings/ui';

const $codeMsg = codeMessageObserver();

document.addEventListener('DOMContentLoaded', () => {
  $codeMsg
    // Only listen for the init-ui commands
    .pipe(filter(msg => msg.command.startsWith('init-ui')))
    .subscribe(({ command }) => {
      switch(command) {
        case 'init-ui-settings':
          initSettings();
          break;
          
        default:
          console.warn(`Unknown Command ${command}`);
          break;
      }
    });
});
