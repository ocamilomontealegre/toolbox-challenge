import { render } from 'react-dom';
import React from 'react';
import App from "./app/App";

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);