import React from 'react';
import { Redirect } from 'react-router';
import Paper from 'src/common/components/Paper';
import Row from 'src/common/components/Row';
import { ViewerConsumer } from 'src/common/components/ViewerContext/ViewerContext';

class Dashboard extends React.Component {
  componentDidMount() {
    alert('Welcome to dashboard!');
  }
  componentWillUnmount() {
    alert('Navigating away from dashboard');
  }
  render() {
    return (
      <ViewerConsumer>
        {({ viewer }) => {
          if (!viewer) {
            return <Redirect to="/" />;
          }
          return (
            <Paper>
              <h1>Dashboard</h1>
              <Row>Welcome {viewer.email}!</Row>
            </Paper>
          );
        }}
      </ViewerConsumer>
    );
  }
}

export default Dashboard;
