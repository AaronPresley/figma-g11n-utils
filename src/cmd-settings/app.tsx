import React, { ChangeEvent, useEffect } from 'react';
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

  const onSettingsChanged = (path:string, value:string | boolean) => {
    console.log({ path, value });
    sendMsgToCode({
      command: 'settings-setValue',
      data: { path, value },
    });
  }

  return (
    <>
      <h1>Pseudo Translate Settings</h1>
      <TextInputField
        label="Prepend Characters"
        helpText="When provided, the characters here will be prepended to the translated text layer."
        defaultValue={settingsMsg?.data?.pseudoTranslate?.prependChars || ''}
        // Random weirdness is requiring us to use onBlur
        onBlur={({ currentTarget: { value }}) => onSettingsChanged('pseudoTranslate.prependChars', value)}
      />
      <TextInputField
        label="Append Characters"
        helpText="When provided, the characters here will be appended to the translated text layer."
        defaultValue={settingsMsg?.data?.pseudoTranslate?.appendChars || ''}
        // Random weirdness is requiring us to use onBlur
        onBlur={({ currentTarget: { value }}) => onSettingsChanged('pseudoTranslate.appendChars', value)}
      />
      <CheckboxField
        label="Expand Text"
        helpText="When enabled, this will expand the length of the given text layer based on its length."
        defaultChecked={settingsMsg?.data?.pseudoTranslate?.doExpand}
        onClick={({ currentTarget: { checked }}) => onSettingsChanged('pseudoTranslate.doExpand', checked)}
      />
    </>
  );
}

export default App;