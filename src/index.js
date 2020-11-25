import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.css';
import { BrowserRouter } from "react-router-dom";
import { ProtectedRoutes } from "./routes/protected.routes";
import { UnprotectedRoutes } from "./routes/unprotected.routes";

const user = window.localStorage.getItem('user');

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {user ? <ProtectedRoutes /> : <UnprotectedRoutes />}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


