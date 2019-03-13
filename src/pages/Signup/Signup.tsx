/**
 * Exercise 1: `useState`
 *
 * Normally, in a class-based component, we have to keep the state in our component and use `setState` to be able to make changes to these values.
 * `useState` hook is created as an easy way to do this.
 * It takes the default value of our variable as the param and give us the value and a function to change it.
 *
 * How it works:
 * src/pages/Signup.exercise-1.tsx
 *
 * Exercise:
 * - use `useState` to control `email` and `password` of login form
 * - alert `email` and `password` when submit button is clicked
 * src/pages/Login/Login.tsx
 *
 * Answer:
 * src/pages/Login/Login.answer-1.tsx
 */

/**
 * Exercise 2: `useContext`
 *
 * Traditionally, to use react context, we have to use context `Consumer` render props to be able to get the values / functions related to the context.
 * `useContext` hook is created as an easy way to get context values without mount Consumer, thus simplifying it.
 * We export the `Context` and use it as the param of `useContext`. The result is the state of the context.
 *
 * How it works:
 * src/pages/Signup.exercies-2.tsx
 *
 * Exercise:
 * use `useContext` to
 * - get who's the logged (using `ViewerContext`)
 * - check details provided, show error (using `useState`) to user if wrong credentials (using `UsersContext`)
 * - if successful, set `viewer` (using `ViewerContext`)
 * - if the viewer is set, use `<Redirect to='/dashboard'>` to redirect user to dashboard after logging in.
 * src/pages/Login/Login.tsx
 *
 * Answer:
 * src/pages/Login/Login.answer-2.tsx
 */

import React from 'react';
import { Redirect } from 'react-router';
import Paper from 'src/common/components/Paper';
import Row from 'src/common/components/Row';
import { UsersConsumer } from 'src/common/components/UsersContext/UsersContext';
import { ViewerConsumer } from 'src/common/components/ViewerContext/ViewerContext';

interface State {
  email: string;
  password: string;
}

class Signup extends React.Component<{}, State> {
  state: State = {
    email: '',
    password: ''
  };
  setEmail = (email: string): void => {
    this.setState({ email });
  }
  setPassword = (password: string): void => {
    this.setState({ password });
  }
  render() {
    const { email, password } = this.state;
    return (
      <UsersConsumer>
        {({ addUser }) => (
          <ViewerConsumer>
            {({ viewer, setViewer }) => {
              if (viewer) {
                return <Redirect to="/dashboard" />;
              }

              return (
                <Paper>
                  <form>
                    <h1>Sign up</h1>
                    <Row>
                      <div>
                        <label>Email</label>
                      </div>
                      <div>
                        <input
                          name="email"
                          value={email}
                          onChange={e => this.setEmail(e.target.value)}
                        />
                      </div>
                    </Row>
                    <Row>
                      <div>
                        <label>Password</label>
                      </div>
                      <div>
                        <input
                          name="password"
                          type="password"
                          value={password}
                          onChange={e => this.setPassword(e.target.value)}
                        />
                      </div>
                    </Row>
                    <Row>
                      <button
                        type="button"
                        onClick={() => {
                          addUser({
                            email,
                            password
                          });

                          setViewer({
                            email
                          });
                        }}
                      >
                        Sign up
                      </button>
                    </Row>
                  </form>
                </Paper>
              );
            }}
          </ViewerConsumer>
        )}
      </UsersConsumer>
    );
  }
}

export default Signup;
