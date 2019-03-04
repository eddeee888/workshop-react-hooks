import React from 'react';
import { Redirect } from 'react-router';
import Row from 'src/common/components/Row';
import { ViewerConsumer } from 'src/common/components/ViewerContext/ViewerContext';

const Dashboard: React.FunctionComponent = () => {
  return (
    <ViewerConsumer>
      {({ viewer }) => {
        if (!viewer) {
          return <Redirect to="/" />;
        }
        return <Row>Welcome {viewer.email}!</Row>;
      }}
    </ViewerConsumer>
  );
};

export default Dashboard;
