import React, { useEffect, useLayoutEffect } from 'react';
import Wrapper from '../utils-react/components/wrapper';
import { useMsgFromCode, useMsgToCode } from '../utils-react/hooks';
import { useCodeMessageStore } from "../utils-react/state";
import { codeMessageObserver } from '../utils/messages';

const App = () => {
  const setLastMessage = useCodeMessageStore(state => state.setLastMessage);
  const uiErrors = useMsgFromCode('ui-error');
  const sendMsgToCode = useMsgToCode();

  // Subscribing to our RxJS observer here, and setting the
  // latest message to the global store
  useLayoutEffect(() => {
    codeMessageObserver().subscribe(setLastMessage);
  }, []);

  return (
    <Wrapper>
      { !!uiErrors && (
        <span>{ uiErrors.data || 'something went wrong' }</span>
      )}
      Hi I'm the app!
    </Wrapper>
  );
}

export default App;