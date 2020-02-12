import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Login from './pages/Login.js';
import Dashboard from './pages/Dashboard.js';
import LandingPage from './pages/LandingPage.js';
import Tasks from './pages/Tasks.js';
import Alerts from './pages/Alerts.js';
import { Router, Route, hashHistory } from 'react-router';
import store from './store';

const app = document.getElementById('app');
ReactDOM.render(
  <Provider store={store}>
    <Router history={ hashHistory }>
      <Route path="/login" component={ Login }/>
      <Route path="/dashboard" component={ Dashboard }/>
      <Route path="/tasks" component={ Tasks }/>
      <Route path="/alerts" component={ Alerts }/>
      <Route path="/" component={ LandingPage }/>
    </Router>
  </Provider>, app);