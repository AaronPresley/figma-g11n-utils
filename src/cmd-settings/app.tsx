import React, { useEffect } from 'react';
import set from 'lodash/set'
import { useMsgFromCode, useMsgToCode } from '../utils-react/hooks';
import { StoredSettings } from './code';

const App = () => {
  const sendMsgToCode = useMsgToCode();
  const settingsMsg = useMsgFromCode('settings-getSettings');

  useEffect(() => {
    sendMsgToCode({ command: 'settings-getSettings' });
  }, []);
  
  const onSettingsChanged = (path:string, value:any) => {
    set(settingsMsg?.data, path, value);
    sendMsgToCode({
      command: 'settings-saveSettings',
      data: settingsMsg?.data,
    });
    sendMsgToCode({ command: 'settings-getSettings' });
  }

  return (
    <>
      <h1>Pseudo Translation Settings</h1>
      <label>
        <input
          type="checkbox"
          disabled={!settingsMsg}
          checked={settingsMsg?.data?.pseudoTranslate?.doExpand}
          onChange={({ target: { checked }}) => {
            onSettingsChanged(`pseudoTranslate.doExpand`, checked);
          }}
        />
        Do Expand
      </label>
    </>
  );
}

export default App;