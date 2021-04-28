import React, { useEffect } from 'react';
import { useMsgFromCode, useMsgToCode } from '../utils-react/hooks';

const App = () => {
  const sendMsgToCode = useMsgToCode();
  const settingsMsg = useMsgFromCode('settings-getSettings');

  useEffect(() => {
    sendMsgToCode({ command: 'settings-getSettings' });
  }, []);

  return (
    <>
      Hi I'm the app!
    </>
  );
}

export default App;