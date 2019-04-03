import React from 'react';
import Paper from 'src/common/components/Paper';
import Row from 'src/common/components/Row';

function Login() {
  return (
    <Paper>
      <h1>Log in</h1>
      <form>
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
      </form>
    </Paper>
  );
}
export default Login;
