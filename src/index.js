import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

//store from redux - global store
import store from "./redux/store";
import { Provider } from "react-redux";

import App from './App';
// import 'bootstrap/dist/css/bootstrap.min.css';


import { BrowserRouter } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
);


