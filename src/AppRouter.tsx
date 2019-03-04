import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from 'src/common/components/Footer';
import Main from 'src/common/components/Main';
import Nav from 'src/common/components/Nav';
import Dashboard from 'src/pages/Dashboard';
import Login from 'src/pages/Login';
import Logout from 'src/pages/Logout';
import Signup from 'src/pages/Signup';

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
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
          </Switch>
        </Main>
        <Footer />
      </>
    </Route>
  </BrowserRouter>
);

export default AppRouter;
