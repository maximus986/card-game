import React from 'react';
import emotionReset from 'emotion-reset';
import { Global, css } from '@emotion/react';

export const GlobalStyle = () => (
  <Global
    styles={css`
      ${emotionReset}

      *, *::after, *::before {
        box-sizing: border-box;
      }
      img {
        width: 100%;
      }
      html,
      body,
      #root,
      #root > div {
        height: 100%;
      }
      button {
        border: none;
        padding: 0;
        margin: 0;
        cursor: pointer;
        background: transparent;
      }
    `}
  />
);
