import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";

// Redux related imports 
import { Provider } from 'react-redux'
import { store } from "./redux/store"
import { persistor } from "./redux/store"
import { PersistGate } from 'redux-persist/integration/react';


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter >
      <React.StrictMode>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,

  document.getElementById('root')
);
