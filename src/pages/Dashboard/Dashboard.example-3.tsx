import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router';
import Paper from 'src/common/components/Paper';
import Row from 'src/common/components/Row';
import ViewerContext from 'src/common/components/ViewerContext';

function Dashboard() {
  const { viewer } = useContext(ViewerContext);

  useEffect(() => {
    alert('Welcome to dashboard!');

    return () => {
      alert('Navigating away from dashboard');
    };
  });

  if (!viewer) {
    return <Redirect to="/" />;
  }

  return (
    <Paper>
      <h1>Dashboard</h1>
      <Row>Welcome {viewer.email}!</Row>
    </Paper>
  );
}

export default Dashboard;
