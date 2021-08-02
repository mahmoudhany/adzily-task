import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './redux'
import Stepper from './stepper';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Stepper />
    </Provider>
  </React.StrictMode>
  ,
  document.getElementById('root')
);
