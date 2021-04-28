import React, { ChangeEvent, ChangeEventHandler, FunctionComponent } from 'react';

export interface Props {
  helpText?: string | JSX.Element;
  label: string | JSX.Element;
  onChange: (e:ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
}

const CheckboxField:FunctionComponent<Props> = ({ label, checked, onChange, helpText }) => {
  return (
    <label className="input-group has-checkbox">
      <input type="checkbox" checked={checked} onChange={onChange} />
      { label }
      <div className="help-text">{ helpText }</div>
    </label>
  )
};

export default CheckboxField;