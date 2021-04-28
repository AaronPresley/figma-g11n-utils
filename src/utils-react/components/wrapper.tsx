import React, { FunctionComponent, useEffect, useLayoutEffect } from "react";
import { codeMessageObserver } from "../../utils/messages";
import { useMsgFromCode } from "../hooks";
import { useCodeMessageStore } from "../state";

/**
 * A functional component to be used by each React UI within this
 * Figma plugin
 */
const Wrapper:FunctionComponent<{}> = ({ children }) => {
  return (
    <div id="wrapper">
      { children }
    </div>
  )
};

Wrapper.displayName = `Wrapper`;
export default Wrapper;