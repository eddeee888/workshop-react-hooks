import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router';
import Paper from 'src/common/components/Paper';
import Row from 'src/common/components/Row';
import UsersContext from 'src/common/components/UsersContext';
import ViewerContext from 'src/common/components/ViewerContext';

const Login: React.FunctionComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { viewer, setViewer } = useContext(ViewerContext);
  const { users } = useContext(UsersContext);

  if (viewer) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Paper>
      <h1>Log in</h1>
      <form>
        <Row>
          <div>
            <label>Email</label>
          </div>
          <div>
            <input
              name="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
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
              onChange={e => setPassword(e.target.value)}
            />
          </div>
        </Row>
        {error && (
          <Row>
            <div className="error">{error}</div>
          </Row>
        )}
        <Row>
          <button
            type="button"
            onClick={() => {
              if (!users[email]) {
                setError('User does not exist');
              }

              if (users[email] && users[email].password !== password) {
                setError('Incorrect password!');
              }

              if (users[email] && users[email].password === password) {
                setViewer({ email });
              }
            }}
          >
            Log in
          </button>
        </Row>
      </form>
    </Paper>
  );
};
export default Login;
