// entry-server.jsx
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';

export function render(url) {
  const context = {}; // Context for StaticRouter
  const appHtml = renderToString(
    <StaticRouter location={url} context={context}>
     
        <App />
      
    </StaticRouter>
  );

  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Your App</title>
      <!-- other head elements (like styles) go here -->
  </head>
  <body>
      <div id="app">${appHtml}</div>
      <div id="
  </body>
  </html>`;
}
