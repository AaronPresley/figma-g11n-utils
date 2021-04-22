import { filter } from 'rxjs/operators';
import { $uiMessage, sendMsgToCode } from './utils/messages';

$uiMessage
  .subscribe(val => console.log('CODE message received', val));

sendMsgToCode({
  command: 'asdf',
  asdf: 'asdf',
});