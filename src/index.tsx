import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from 'src/reportWebVitals';
import Routing from 'src/config/routing';
import "src/index.css"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <Routing />
  </React.StrictMode>
);

reportWebVitals();
