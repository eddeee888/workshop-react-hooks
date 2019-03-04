import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router';
import Row from 'src/common/components/Row';
import ViewerContext from 'src/common/components/ViewerContext';

const Dashboard: React.FunctionComponent = () => {
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

  return <Row>Welcome {viewer.email}!</Row>;
};

export default Dashboard;
