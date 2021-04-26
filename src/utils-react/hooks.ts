import { useEffect, useState } from 'react';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { codeMessageObserver, FigmaMessageData, sendMsgToCode } from '../utils/messages';

/**
 * A hook function that listens for any incoming messages from code
 * and updates a state var with that value
 */
export const useMsgFromCode = ():FigmaMessageData => {
  const [ lastMsg, setLastMsg ] = useState<FigmaMessageData>(null);
  useEffect(() => {
    codeMessageObserver()
      .pipe(filter(msg => msg !== null))
      .subscribe(msg => setLastMsg(msg));
  }, []);

  return lastMsg;
};

/**
 * A simple helper function that sends messages to
 * the code layer
 */
export const useMsgToCode = () => sendMsgToCode;