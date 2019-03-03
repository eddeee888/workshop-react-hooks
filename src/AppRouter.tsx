import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from 'src/pages/Dashboard';
import Logout from 'src/pages/Logout';
import Signup from 'src/pages/Signup';
import Main from './common/components/Main';
import Nav from './common/components/Nav';

const AppRouter = () => (
  <BrowserRouter>
    <Route path="/">
      <>
        <Nav />
        <Main>
          <Switch>
            <Route path="/" exact component={() => <div>Homepage</div>} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/signup" component={Signup} />
            <Route path="/logout" component={Logout} />
          </Switch>
        </Main>
      </>
    </Route>
  </BrowserRouter>
);

export default AppRouter;
