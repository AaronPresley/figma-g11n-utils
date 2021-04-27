import React, { useEffect } from 'react';
import Wrapper from '../utils-react/components/wrapper';
import { useMsgFromCode, useMsgToCode } from '../utils-react/hooks';

const App = () => {
  const currSettings = useMsgFromCode();
  const sendUiMsg = useMsgToCode();

  useEffect(() => {
    sendUiMsg({ command: 'settings-getSettings' });
  }, []);

  useEffect(() => {
    console.log({currSettings});
  }, [currSettings]);

  return (
    <Wrapper>
      Hi I'm the app!
    </Wrapper>
  );
}

export default App;