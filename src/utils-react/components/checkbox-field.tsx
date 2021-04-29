import React, { FunctionComponent, InputHTMLAttributes } from 'react';

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  helpText?: string | JSX.Element;
  label: string | JSX.Element;
}

const CheckboxField:FunctionComponent<Props> = ({ label, helpText, ...others }) => {
  return (
    <label className="input-group has-checkbox">
      <input type="checkbox" {...others} />
      { label }
      <div className="help-text">{ helpText }</div>
    </label>
  )
};

export default CheckboxField;