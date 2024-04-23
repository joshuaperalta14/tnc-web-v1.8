import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Dashboard from '../pages/Dashboard';

function SideNav() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <Switch>
          <Route path="/sidebar" exact component={Dashboard} />
        </Switch>
      </div>
    </Router>
  );
}

export default SideNav;
