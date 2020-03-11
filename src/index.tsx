import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Store } from "./redux/store";
import './index.css';
import { App } from './App';
import * as serviceWorker from './serviceWorker';


const Root = () => (
    <Provider store={Store}>
      <App />
    </Provider>
  );
  
  ReactDOM.render(<Root />, document.getElementById("root"));
  serviceWorker.unregister();