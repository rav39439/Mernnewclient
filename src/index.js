import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AuthContextProvider } from "./components/AuthContext/AuthContext";


//const myfirstelement = <h1>Hello React!</h1>

ReactDOM.render(
    <React.StrictMode>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </React.StrictMode>,
    document.getElementById("root")
  );

