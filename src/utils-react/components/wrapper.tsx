import React, { FunctionComponent, useEffect } from "react";
import { useMsgFromCode } from "../hooks";

const Wrapper:FunctionComponent<{}> = ({ children }) => {
  const errorMsg = useMsgFromCode(cmd => cmd === 'ui-error');

  useEffect(() => {
    console.log({ errorMsg });
  }, [errorMsg]);
  
  return (
    <div id="wrapper">
      { !!errorMsg && (
        <span>{ errorMsg.data || `Sorry, something went wrong!` }</span>
      ) }
      { children }
    </div>
  )
};

Wrapper.displayName = `Wrapper`;
export default Wrapper;