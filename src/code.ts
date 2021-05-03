import pseudoTranslate from './cmd-pseudo-translate/code';
import settings from './cmd-settings/code';
import init from './init';


(async () => {
  // TODO
  // https://github.com/AaronPresley/figma-g11n-utils/issues/2
  await init();
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
