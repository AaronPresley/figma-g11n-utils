import { css } from '@emotion/react';

export default css(`
  html, body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 14px;
    margin: 0;
    padding: 10px;
  }

  h1 {
    font-size: 25px;
  }

  .input-group {
    margin-bottom: 20px;
    position: relative;

    &.has-checkbox, label {
      display: block;
      font-size: 1rem;
      font-weight: bold;
    }
  
    input[type="text"] {
      box-sizing: border-box;
      width: 100%;
      display: block;
      padding: 8px 5px;
      font-size: 1rem;
      margin: 3px 0 0;
    }

    input[type="checkbox"] {
      position: absolute;
      top: 0;
      left: -25px;
    }
    
    &.has-checkbox {
      margin-left: 25px;
    }

    .help-text { 
      font-weight: normal;
    }
  }
`);