import React from 'react';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';
import { ChakraProvider } from "@chakra-ui/react";

export function render(url) {
  return (
    <StaticRouter location={url}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </StaticRouter>
  );
}
