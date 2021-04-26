import pseudoTranslate from './cmd-pseudo-translate/code';
import settings from './cmd-settings/code';

(async () => {
  switch(figma.command) {
    case 'pseudo-translate':
      await pseudoTranslate();
      break;
    
    case 'settings':
      await settings();
      break;
    
    default:
      figma.closePlugin(`🚨 Unknown Command "${figma.command}"`);
      break;
  }
})();
