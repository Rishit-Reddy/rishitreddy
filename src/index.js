import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { ColorModeProvider } from './components/ui/color-mode';
import { system } from './theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider value={system}>
    <ColorModeProvider>
      <App />
    </ColorModeProvider>
  </ChakraProvider>
);
