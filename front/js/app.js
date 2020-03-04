/**
 * @file App main entry point.
 */

import '@babel/polyfill';

import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// Include the main scss file for webpack processing.
import '../css/app.scss';

import App from './components/App';
import CreateEmployee from './components/CreateEmployee';
import getLogger from './utils/logger';

const log = getLogger('App');

const unstyledList = {
  listStyleType: 'none',
  margin: 0,
  padding: 0,
};
const inline = { display: 'inline', padding: '1em' };

const init = () => {
  log.info('init() :: App starts booting...');
  ReactDom.render(
    <Router>
      <div>
        <nav>
          <ul style={unstyledList}>
            <li style={inline}>
              <Link to="/">Home</Link>
            </li>
            <li style={inline}>
              <Link to="/employees/new">New Employee</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/employees/new">
            <CreateEmployee />
          </Route>
          <Route path="/">
            <App />
          </Route>
        </Switch>
      </div>
    </Router>,
    document.getElementById('app'),
  );
};

// init app
init();
