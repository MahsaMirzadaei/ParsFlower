import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import App from './App';
import { ThemeProvider } from '@mui/material/styles';
import ProductsProvider from './context/products-context'
import { theme } from './Theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ProductsProvider>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
          <App />
      </ThemeProvider>
    </BrowserRouter>
  </ProductsProvider>
);

