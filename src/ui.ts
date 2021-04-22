import { sendMsgToCode, codeMessageObserver} from './utils/messages';

codeMessageObserver()
  .subscribe(console.log);

sendMsgToCode({
  command: 'from-ui-init',
});

setTimeout(function() {
  sendMsgToCode({
    command: 'from-ui-delay',
  });
}, 2000);