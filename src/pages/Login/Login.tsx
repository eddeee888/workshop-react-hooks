import React from 'react';
import Paper from 'src/common/components/Paper';
import Row from 'src/common/components/Row';

const Login: React.FunctionComponent = () => {
  return (
    <Paper>
      <h1>Log in</h1>
      <Row>
        <div>
          <label>Email</label>
        </div>
        <div>
          <input name="email" />
        </div>
      </Row>
      <Row>
        <div>
          <label>Password</label>
        </div>
        <div>
          <input name="password" type="password" />
        </div>
      </Row>
      <Row>
        <button type="button">Log in</button>
      </Row>
    </Paper>
  );
};
export default Login;
