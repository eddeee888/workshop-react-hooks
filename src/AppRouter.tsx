import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Dashboard from 'src/pages/Dashboard';
import Logout from 'src/pages/Logout';
import Signup from 'src/pages/Signup';

const AppRouter = () => (
  <BrowserRouter>
    <>
      <Route path="/" component={() => <div>Homepage</div>} />
      <Route path="/dashboard/" component={Dashboard} />
      <Route path="/signup/" component={Signup} />
      <Route path="/logout/" component={Logout} />
    </>
  </BrowserRouter>
);

export default AppRouter;
