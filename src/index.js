import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import { FarmHouseListProvider } from './contexts/FarmHouseListContext'
import { FarmHouseProvider } from './contexts/FarmHouseContext'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <FarmHouseListProvider>
      <FarmHouseProvider>
        <App />
      </FarmHouseProvider>
    </FarmHouseListProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
