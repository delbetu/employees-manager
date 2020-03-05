/**
 * @file App main entry point.
 */

import '@babel/polyfill';

import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom';

// Include the main scss file for webpack processing.
import '../css/app.scss';

import App from './components/App';
import CreateEmployee from './components/CreateEmployee';
import EmployeeEntries from './components/EmployeeEntries';
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
            <li style={inline}>
              <Link to="/employees/1/entries">Entries for Employee 1</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/employees/new">
            <CreateEmployee />
          </Route>
            <Route path="/employees/:id/entries">
            <EmployeeEntries />
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
