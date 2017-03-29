/* eslint-disable */

import { injectGlobal } from 'styled-components';

const colors = {
  primary: '#ed1262',
  alternate: 'lime',
  line: '#dedede',
  black: '#282828',
  white: '#fff',
  gray: '#f2f2f2'
};

injectGlobal`
	html {
    min-height: 100%;
    overflow: hidden;
  }

  html,
  body {
    position: absolute;
    top: 0;
    width: 100%;
    overflow: hidden;
  }

  body {
    height: 100%;
    overflow: hidden;
    margin: 0;
    padding: 0;
    font-family: system, -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Lucida Grande";
    font-size: 14px;
    background-color: ${colors.white};
    color: ${colors.black};
  }

  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    margin-bottom: 15px;
  }

  p {
    margin: 0 0 20px 0;
    line-height: 1.5;
    font-weight: 500;
  }

  .hidden {
    display: nones;
  }

  .scrollable-area {
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
  }

`;

export {
  colors
}
