import React, { useState } from 'react';
import Paper from 'src/common/components/Paper';
import Row from 'src/common/components/Row';

const Login: React.FunctionComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
        <Row>
          <button type="button" onClick={() => {
            alert(`${email} ${password}`)
          }}>Log in</button>
        </Row>
      </form>
    </Paper>
  );
};
export default Login;
