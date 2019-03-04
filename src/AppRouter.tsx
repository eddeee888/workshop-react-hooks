import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from 'src/common/components/Footer';
import Main from 'src/common/components/Main';
import Nav from 'src/common/components/Nav';
import Dashboard from 'src/pages/Dashboard';
import Login from 'src/pages/Login';
import Logout from 'src/pages/Logout';
import Signup from 'src/pages/Signup';
import Paper from './common/components/Paper';

const AppRouter = () => (
  <BrowserRouter>
    <Route path="/">
      <>
        <Nav />
        <Main>
          <Switch>
            <Route
              path="/"
              exact
              component={() => (
                <Paper>
                  <h1>Welcome to hooks workshop</h1>
                  <div>
                    This is an introductory workshop to React hooks. In this
                    workshop, we are going to be implementing a very simple sign
                    up, log in, log out flow to learn the 3 most basic hooks:
                  </div>
                  <ul>
                    <li>useState (exercise 1)</li>
                    <li>useContext (exercise 2)</li>
                    <li>useEffect (exercise 3)</li>
                  </ul>
                  <div>
                    Description of the exercises can be found in
                    <b>*.exercise-*.tsx</b> files.
                  </div>
                  <div>
                    Answers can be found in <b>*.answer-*.tsx</b> files.
                  </div>
                  <div>
                    API reference can be found on{' '}
                    <a
                      target="_blank"
                      href="https://reactjs.org/docs/hooks-intro.html"
                    >
                      React official website
                    </a>
                  </div>
                </Paper>
              )}
            />
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
