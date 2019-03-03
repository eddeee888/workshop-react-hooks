import React from 'react';
import Paper from 'src/common/components/Paper';
import Row from 'src/common/components/Row';
import {
  AddUserFn,
  UsersConsumer
} from 'src/common/components/UsersContext/UsersContext';
import {
  SetViewerFn,
  ViewerConsumer
} from 'src/common/components/ViewerContext/ViewerContext';

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
  signUp = (addUser: AddUserFn, setViewer: SetViewerFn): void => {
    const { email, password } = this.state;

    addUser({
      email,
      password
    });

    setViewer({
      email
    });
  }
  render() {
    const { email, password } = this.state;
    return (
      <UsersConsumer>
        {({ addUser }) => (
          <ViewerConsumer>
            {({ setViewer }) => (
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
                      onClick={() => this.signUp(addUser, setViewer)}
                    >
                      Signup
                    </button>
                  </Row>
                </form>
              </Paper>
            )}
          </ViewerConsumer>
        )}
      </UsersConsumer>
    );
  }
}

export default Signup;
