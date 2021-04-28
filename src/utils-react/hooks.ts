import { useEffect, useState } from 'react';
import { FigmaMessageData, sendMsgToCode } from '../utils/messages';
import { useCodeMessageStore } from './state';

/**
 * A hook function that listens for any incoming messages from code
 * and updates a state var with that value
 * @param fiter 
 */
export const useMsgFromCode = (cmd:string = null):FigmaMessageData => {
  const lastMsg = useCodeMessageStore(state => state.lastMessage);
  const [ thisMsg, setMsg ] = useState<FigmaMessageData>(null);

  useEffect(() => {
    if (!cmd || cmd === lastMsg?.command) {
      setMsg(lastMsg);
    }
  }, [lastMsg]);
  
  return thisMsg;
};

/**
 * A simple helper function that sends messages to
 * the code layer
 */
export const useMsgToCode = () => sendMsgToCode;