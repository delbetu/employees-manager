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
import getLogger from './utils/logger';

const log = getLogger('App');

const CreateEmployee = () => <h1>Create Employee Component</h1>;

const init = () => {
  log.info('init() :: App starts booting...');
  ReactDom.render(
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
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
