import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PageNotFound from 'NotFound';
import Members from 'Members';
import Dashboard from 'Dashboard';
import Layout from 'Layout';
import ROUTE_URL from 'Layout/constants';

export const renderLayoutMembers = props => Layout(Members, props);
export const renderLayoutDashboard = props => Layout(Dashboard, props);

const Routes = () => (
  <Switch>
    <Route exact path={ROUTE_URL.MEMBERS} render={renderLayoutMembers} />
    <Route exact path={ROUTE_URL.DASHBOARD} render={renderLayoutDashboard} />
    <Route component={PageNotFound} />
  </Switch>
);

export default Routes;
