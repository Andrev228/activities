import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components'
import App from './App';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: monospace;
    font-size: 16px;
  }
`;

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyle />
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
