import pseudoTranslate from './pseudo-translate/code';
import settings from './settings/code';

(async () => {
  switch(figma.command) {
    case 'pseudo-translate':
      await pseudoTranslate()
      break;
    
    case 'settings':
      await settings();
      break;
    
    default:
      figma.closePlugin(`🚨 Unknown Command "${figma.command}"`);
      break;
  }
})();
