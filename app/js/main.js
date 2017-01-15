import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

import style from '../scss/main.scss';

import Page from './screens/Page';
import Dashboard from './screens/Dashboard';

render((
  <Router history={browserHistory}>
    <Route path="/" component={Page}>
      <IndexRoute component={Dashboard} />
    </Route>
  </Router>
), document.getElementById('root'));
