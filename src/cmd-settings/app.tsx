import React, { useEffect } from 'react';
import { useMsgFromCode, useMsgToCode } from '../utils-react/hooks';

const App = () => {
  const codeMsg = useMsgFromCode();
  const sendUiMsg = useMsgToCode();

  useEffect(() => {
    console.log('from ui', codeMsg);
    if (codeMsg?.command === 'ping') {
      sendUiMsg({ command: 'pong!' });
    }
  }, [codeMsg]);

  return (
    <>I'm the app!</>
  );
}

export default App;