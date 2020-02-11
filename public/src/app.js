import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Login from './pages/Login.js';
import ContentTwo from './components/ContentTwo.js';
import ProjectDetailsComponent from './components/ProjectDetailsComponent.js';
import Tweets from './components/Tweets.js';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import store from './store';

const app = document.getElementById('app');
ReactDOM.render(
  <Provider store={store}>
    <Router history={ hashHistory }>
      <Route path="/" component={ Login }>
        <IndexRoute component={ ProjectDetailsComponent } />
        <Route path="two" component={ ContentTwo }/>
        <Route path="tweets" component={ Tweets }/>
      </Route>
    </Router>
  </Provider>, app);