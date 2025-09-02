import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

import { ThemeProvider, createTheme } from '@mui/material';
import ThemeContextProvider from './contexts/ThemeContext';

const theme = createTheme({
  palette: {
    primary: {
      main: "#eeeeee",
      darkGrey:"#cfcece",
      dark: "#111111",
      darker: "black",
      blue: "#3452ff",
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider
      theme={theme}
    >
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
