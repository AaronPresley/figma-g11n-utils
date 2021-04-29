import React, { ChangeEvent, FunctionComponent, InputHTMLAttributes } from 'react';

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  helpText?: string | JSX.Element;
  label: string | JSX.Element;
}

const TextInputField:FunctionComponent<Props> = ({ label, helpText, ...others }) => {
  return (
    <div className="input-group">
      <label>{ label }</label>
      <input type="text" {...others} />
      <div className="help-text">{ helpText }</div>
    </div>
  )
};

export default TextInputField;