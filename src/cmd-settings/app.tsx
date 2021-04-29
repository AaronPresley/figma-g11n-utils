import React, { useEffect } from 'react';
import set from 'lodash/set'
import { useMsgFromCode, useMsgToCode } from '../utils-react/hooks';
import { StoredSettings } from './code';
import TextInputField from '../utils-react/components/text-input-field';
import CheckboxField from '../utils-react/components/checkbox-field';

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
      <h1>Pseudo Translate Settings</h1>
      <TextInputField
        label="Prepend Characters"
        helpText="When provided, the characters here will be prepended to the translated text layer."
        value=""
        onChange={() => {}}
      />
      <TextInputField
        label="Append Characters"
        helpText="When provided, the characters here will be appended to the translated text layer."
        value=""
        onChange={() => {}}
      />
      <CheckboxField
        label="Expand Text"
        helpText="When enabled, this will expand the length of the given text layer based on its length."
        checked
        onChange={() => {}}
      />
      {/* <label>
        <input
          type="checkbox"
          disabled={!settingsMsg}
          checked={settingsMsg?.data?.pseudoTranslate?.doExpand}
          onChange={({ target: { checked }}) => {
            onSettingsChanged(`pseudoTranslate.doExpand`, checked);
          }}
        />
        Do Expand
      </label> */}
    </>
  );
}

export default App;