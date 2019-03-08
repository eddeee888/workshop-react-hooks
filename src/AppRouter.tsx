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
                  <h1>Introduction to hooks workshop</h1>
                  <div>
                    This is an introductory workshop for{' '}
                    <a
                      target="_blank"
                      href="https://reactjs.org/docs/hooks-intro.html"
                    >
                      React hooks
                    </a>
                    . In this workshop, we are going to be implementing a very
                    simple sign up, log in, log out flow to learn the 3 most
                    basic hooks:
                  </div>
                  <ul>
                    <li>useState (exercise 1)</li>
                    <li>useContext (exercise 2)</li>
                    <li>useEffect (exercise 3)</li>
                  </ul>
                  <div>
                    Exercises can be found in:
                    <ul>
                      <li>
                        <b>Signup.tsx</b>: Exercise 1 and 2
                      </li>
                      <li>
                        <b>Dashboard.tsx</b>: Exercise 3
                      </li>
                    </ul>
                  </div>
                  <div>
                    Answers can be found in <b>*.answer-*.tsx</b> files.
                  </div>
                  <hr />
                  <div>Sample tests and notes can be found in:</div>
                  <ul>
                    <li>
                      <b>Signup.example-2.test.tsx</b>
                    </li>
                    <li>
                      <b>Dashboard.example-3.test.tsx</b>
                    </li>
                  </ul>
                  <hr />
                  <div>More references and resources:</div>
                  <ul>
                    <li>
                      <a
                        target="_blank"
                        href="https://reactjs.org/docs/hooks-custom.html"
                      >
                        Building your own hooks
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="https://usehooks.com/">
                        More hook examples
                      </a>
                    </li>
                  </ul>
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
