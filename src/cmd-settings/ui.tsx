import React from 'react';
import ReactDOM from 'react-dom';
import Wrapper from '../utils-react/components/wrapper';
import SettingsApp from './app';

export default () => {
  ReactDOM.render(
    <Wrapper>
      <SettingsApp />
    </Wrapper>,
    document.getElementById('root'),
  );
}