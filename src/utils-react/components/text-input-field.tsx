import React, { ChangeEvent, ChangeEventHandler, FunctionComponent } from 'react';

export interface Props {
  helpText?: string | JSX.Element;
  label: string | JSX.Element;
  onChange: (e:ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
}

const TextInputField:FunctionComponent<Props> = ({ label, value, onChange, helpText }) => {
  return (
    <div className="input-group">
      <label>{ label }</label>
      <input type="text" value={value} onChange={onChange} />
      <div className="help-text">{ helpText }</div>
    </div>
  )
};

export default TextInputField;