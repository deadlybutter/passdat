import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

import style from '../scss/main.scss';

import Page from './screens/Page';
import Dashboard from './screens/Dashboard';
import Auth from './screens/Auth';

import EnsureAuth from './components/EnsureAuth';

render((
  <Router history={browserHistory}>
    <Route path="/" component={Page}>
      <Route path="/login" component={Auth} />
      <Route path="/signup" component={Auth} />
      <Route path="/invite" component={Auth} />

      <Route component={EnsureAuth}>
        <IndexRoute component={Dashboard} />
      </Route>
    </Route>
  </Router>
), document.getElementById('root'));
