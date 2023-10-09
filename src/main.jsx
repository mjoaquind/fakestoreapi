import React from 'react'
import ReactDOM from 'react-dom/client'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import App from './App.jsx'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#5e5e5e',
    },
    secondary: {
      main: '#fdd835',
    },
    background: {
      default: '#e0e0e0',
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
    </ThemeProvider>
  </React.StrictMode>,
)
