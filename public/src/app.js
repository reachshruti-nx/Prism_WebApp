import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Login from './pages/Login.js';
import LandingPage from './pages/LandingPage.js';
import { Router, Route, hashHistory } from 'react-router';
import store from './store';

const app = document.getElementById('app');
ReactDOM.render(
  <Provider store={store}>
    <Router history={ hashHistory }>
      <Route path="/" component={ Login }>
        <Route path="login" component={ Login }/>
      </Route>
    </Router>
  </Provider>, app);