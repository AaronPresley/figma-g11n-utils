import pseudoTranslate from './pseudo-translate/code';

(async () => {
  switch(figma.command) {
    case 'pseudo-translate':
      pseudoTranslate()
      break;
    
    default:
      figma.closePlugin(`🚨 Unknown Command "${figma.command}"`);
      break;
  }
})();
