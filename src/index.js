import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AuthContextProvider } from "./components/AuthContext/AuthContext";

import {ProductContextProvider} from "./components/ProductContext/ProductContext";
//const myfirstelement = <h1>Hello React!</h1>

ReactDOM.render(
    <React.StrictMode>
      <AuthContextProvider>
        <ProductContextProvider>
        <App />
        </ProductContextProvider>
      </AuthContextProvider>
    </React.StrictMode>,
    document.getElementById("root")
  );

