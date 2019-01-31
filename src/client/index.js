import '../generic/scripts/app/css/chatapp.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from '../generic/scripts/app/store/configureStore';
import DevTools from '../generic/scripts/app/containers/DevTools';
import routes from '../generic/scripts/app/routes-chat';

const initialState = window.__INITIAL_STATE__;
const store = configureStore(initialState);
const rootElement = document.getElementById('react');

ReactDOM.render(
  <Provider store={store}>
    <div style={{height: '100%'}}>
      <Router children={routes} history={browserHistory} />
      {process.env.NODE_ENV !== 'production' && <DevTools />}
    </div>
  </Provider>,
  rootElement
);
